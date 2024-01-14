
import gradio as gr
from gradio_molgallery3d import MolGallery3D

example = MolGallery3D().example_inputs()

with gr.Blocks() as demo:
    with gr.Row():
        MolGallery3D(label="Blank"),  # blank component
    with gr.Row():
        MolGallery3D(value=[(mol, str(i+1)) for i, mol in enumerate(example)], automatic_rotation=True),  # populated component

demo.launch()