import subprocess
import os

model_path = "src/audio/en_GB_southern_english_female_low.onnx"
config_path = "src/audio/en_GB_southern_english_female_low.onnx.json"
output_path = "static/audio/nautilus_intro.wav"

text = "Hello there, I am Nautilus; a virtual presence of engineer Bradley Minor. If you love JARVIS from iron man , you are going to love me. How can I help you today?"

#construct the command
command = [
    "piper",
    "--model", model_path,
    "--config", config_path,
    "--output-file", output_path,
    "--text", text
    ]

# Run Piper
subprocess.run(command)