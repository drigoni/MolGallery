
import gradio as gr
from gradio_molgallery import MolGallery


example = MolGallery().example_inputs()

with gr.Blocks() as demo:
    with gr.Row():
        MolGallery(label="Blank"),  # blank component
        MolGallery(value=example, label="Populated"),  # populated component


demo.launch()
