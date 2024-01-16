# gradio_molgallery2d
A Gradio component designed for displaying a gallery of 2D molecular structures. It is designed to accept inputs consisting of [`RDKit`](https://www.rdkit.org/docs/source/rdkit.Chem.rdchem.html#rdkit.Chem.rdchem.Mol) objects.

## Installation
This component can be installed through `pip`:
```bash
pip install gradio_molgallery2d
```

## Example usage

```python
import gradio as gr
from gradio_molgallery import MolGallery2D

gallery2d = MolGallery2D(columns=5, height=1000, label="3D Interactive Structures")
```

# Information
For any questions and comments, contact [Davide Rigoni](mailto:davide.rigoni.1@unipd.it).

# Licenze
GPL-3.0
