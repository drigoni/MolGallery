
import gradio as gr
from gradio_molgallery import MolGallery

example = MolGallery().example_inputs()

with gr.Blocks() as demo:
    with gr.Row():
        MolGallery(label="Blank"),  # blank component
    with gr.Row():
        MolGallery(value=[(mol, str(i+1)) for i, mol in enumerate(example)], automatic_rotation=True),  # populated component

demo.launch()
