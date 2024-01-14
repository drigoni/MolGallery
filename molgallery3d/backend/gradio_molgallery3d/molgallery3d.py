"""gr.Gallery() component."""

from __future__ import annotations

from typing import Any, List, Optional

import numpy as np
from gradio_client.documentation import document, set_documentation_group
from PIL import Image as _Image  # using _ to minimize namespace pollution

from gradio import utils
from gradio.components.base import Component
from gradio.data_classes import GradioModel, GradioRootModel
from gradio.events import Events

from rdkit import Chem
from rdkit.Chem import AllChem
from rdkit.Chem.rdchem import Mol

set_documentation_group("component")


class GalleryMolecule(GradioModel):
    molecule: str
    caption: Optional[str] = None


class GalleryData(GradioRootModel):
    root: List[GalleryMolecule]


@document()
class MolGallery3D(Component):
    """
    Used to display a list of interactive 3D molecular structures as a gallery that can be scrolled through.
    Preprocessing: this component does *not* accept input.
    Postprocessing: expects a list of molecules in any format, {List[Mol | str]}, or a {List} of (molecule, {str} caption) tuples and displays them.
    """

    EVENTS = [Events.select]

    data_model = GalleryData

    def __init__(
        self,
        value: Mol
        | [Mol]
        | list[tuple[Mol | str, str]]
        | None = None,
        *,
        label: str | None = None,
        #every: float | None = None,
        show_label: bool | None = None,
        container: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        visible: bool = True,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
        columns: int | tuple | None = 2,
        rows: int | tuple | None = None,
        height: int | float | None = None,
        automatic_rotation: bool = True,
    ):
        """
        Parameters:
            value: List of molecules to display in the gallery by default. If callable, the function will be called whenever the app loads to set the initial value of the component.
            label: The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.
            show_label: if True, will display label.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.
            min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            visible: If False, component will be hidden.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            render: If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
            columns: Represents the number of molecules that should be shown in one row, for each of the six standard screen sizes (<576px, <768px, <992px, <1200px, <1400px, >1400px). If fewer than 6 are given then the last will be used for all subsequent breakpoints
            rows: Represents the number of rows in the image grid, for each of the six standard screen sizes (<576px, <768px, <992px, <1200px, <1400px, >1400px). If fewer than 6 are given then the last will be used for all subsequent breakpoints
            height: The height of the gallery component, in pixels. If more molecules are displayed than can fit in the height, a scrollbar will appear.
            automatic_rotation: If True, will automatically rotate the molecule in the gallery.
        """
        self.columns = columns
        self.rows = rows
        self.height = height
        self.preview = None
        self.object_fit = None
        self.allow_preview = False
        show_download_button = False
        self.show_download_button = (
            (utils.get_space() is not None)
            if show_download_button is None
            else show_download_button
        )
        self.selected_index = 0

        show_share_button = False
        self.show_share_button = (
            (utils.get_space() is not None)
            if show_share_button is None
            else show_share_button
        )
        self.automatic_rotation = automatic_rotation
        super().__init__(
            label=label,
            every=None,
            show_label=show_label,
            container=container,
            scale=scale,
            min_width=min_width,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            render=render,
            value=value,
        )

    def postprocess(
        self,
        value: Mol
        | [Mol]
        | list[tuple[Mol | str, str]]
        | None,
    ) -> GalleryData:
        """
        Parameters:
            value: list of molecules, or list of (molecules, caption) tuples
        Returns:
            list of string file paths to molecules in temp directory
        """
        if value is None:
            return GalleryData(root=[])
        output = []
        for mol in value:
            caption = None
            if isinstance(mol, (tuple, list)):
                mol, caption = mol
            if isinstance(mol, Mol):
                mol = MolGallery3D.get_PDB_block(mol)
            if isinstance(mol, str):
                pdb_string = mol
            else:
                raise ValueError(f"Cannot process type as molecule: {type(mol)}")
            entry = GalleryMolecule(
                molecule=pdb_string, caption=caption
            )
            output.append(entry)
        return GalleryData(root=output)

    def preprocess(self, payload: GalleryData | None) -> GalleryData | None:
        if payload is None or not payload.root:
            return None
        return payload
    
    def example_inputs(self) -> Any:
        examples = [
            "C1=CC(=CC=C1CC(C(=O)O)N)N(CCCl)CCCl",
            "C1CCNC(C1)C2(CN(C2)C(=O)C3=C(C(=C(C=C3)F)F)NC4=C(C=C(C=C4)I)F)O",
            "CN(C)NN=C1C(=NC=N1)C(=O)N",
        ]
        list_of_molecules = [Chem.AddHs(Chem.MolFromSmiles(i)) for i in examples]
        return list_of_molecules

    def get_PDB_block(current_mol):
        # Generate 3D coordinates for the molecule
        AllChem.EmbedMolecule(current_mol)
        # Convert the Mol object to a PDB block string
        pdb_block = Chem.MolToPDBBlock(current_mol)
        return pdb_block
    
