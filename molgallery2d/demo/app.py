
import gradio as gr
from gradio_molgallery2d import MolGallery2D

example = MolGallery2D().example_inputs()

with gr.Blocks() as demo:
    with gr.Row():
        MolGallery2D(label="Blank"),  # blank component
    with gr.Row():
        MolGallery2D(value=[(mol, str(i+1)) for i, mol in enumerate(example)], label="Populated"),  # populated component

demo.launch()