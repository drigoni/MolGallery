
# gradio_molgallery3d
A Gradio component designed for displaying an interactive gallery of 3D molecular structures. It is designed to accept inputs consisting of [`RDKit`](https://www.rdkit.org/docs/source/rdkit.Chem.rdchem.html#rdkit.Chem.rdchem.Mol) objects.

## Installation
This component can be installed through pip:
```bash
pip install gradio_molgallery3d
```

## Example usage

```python
import gradio as gr
from gradio_molgallery import MolGallery3D

gallery3d = MolGallery3D(columns=5, height=1000, label="3D Interactive Structures", automatic_rotation=True)
```

## Features

* When the `automatic_rotation` parameter is set to `True`, the molecular structures rotate automatically.
* Clicking the right mouse button on the 3D structure allows you to download the image as a .png file.

## Known Issues

* Web browsers typically impose limits on the number of canvas objects that can be displayed on a single page, which may result in some structures not being drawn. The specific limitations vary depending on the browser. More details: [[1](https://stackoverflow.com/questions/59140439/allowing-more-webgl-contexts), [2](https://webglfundamentals.org/webgl/lessons/webgl-multiple-views.html#:%7E:text=Another%20issue%20is%20most%20browsers,that%20covers%20the%20entire%20window.)]

# Information
For any questions and comments, contact [Davide Rigoni](mailto:davide.rigoni.1@unipd.it).

# Licenze
GPL-3.0
