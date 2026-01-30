# This module allows Python to run external programs (like FFmpeg)
import subprocess

# This module lets us work with files (check size, paths, etc.)
import os

# This module is used to pause the program for short periods
import time

# This module helps us create a simple loading animation
import itertools


# -----------------------------
# FILE NAMES
# -----------------------------

# Name of the original video file (must exist in this folder)
input_video = "test.mp4"

# Name of the compressed video file (will be created)
output_video = "compressed.mp4"


# -----------------------------
# FUNCTION TO CONVERT BYTES TO MB
# -----------------------------

def bytes_to_mb(bytes_size):
    """
    Converts file size from bytes to megabytes (MB)
    """
    return round(bytes_size / (1024 * 1024), 2)


# -----------------------------
# GET INITIAL FILE SIZE
# -----------------------------

# os.path.getsize() returns the file size in BYTES
initial_size = os.path.getsize(input_video)

print(f"📦 Initial file size: {bytes_to_mb(initial_size)} MB")


# -----------------------------
# FFMPEG COMMAND
# -----------------------------

command = [
    "ffmpeg",                 # Program that does the compression
    "-i", input_video,        # Input file
    "-vcodec", "libx264",     # Lossy video codec (H.264)

    # CRF = Constant Rate Factor (controls quality)
    #
    # CRF GUIDE:
    #  0   → Lossless (huge file)
    # 18   → Visually lossless
    # 20   → Excellent quality
    # 23   → Default (balanced)
    # 25   → Smaller file
    # 28   → Strong compression (common for web)
    # 30+  → Very aggressive compression
    #
    # Lower CRF = better quality, bigger file
    # Higher CRF = worse quality, smaller file
    "-crf", "28",

    # Preset controls compression speed vs efficiency
    # slower = better compression, more CPU usage
    "-preset", "slow",

    # Audio codec (lossy)
    "-acodec", "aac",

    # Audio bitrate
    "-b:a", "128k",

    # Output file
    output_video
]


# -----------------------------
# RUN FFMPEG WITH LOADING SPINNER
# -----------------------------

print("⏳ Compressing video... Please wait")

# Start the FFmpeg process
process = subprocess.Popen(
    command,
    stdout=subprocess.DEVNULL,   # Hide FFmpeg output
    stderr=subprocess.DEVNULL
)

# Spinner animation characters
spinner = itertools.cycle(["|", "/", "-", "\\"])

# While FFmpeg is still running, show a loading spinner
while process.poll() is None:
    print(f"\r🔄 Processing {next(spinner)}", end="")
    time.sleep(0.2)

# Wait for FFmpeg to fully finish
process.wait()

print("\r✅ Compression completed!     ")


# -----------------------------
# GET FINAL FILE SIZE
# -----------------------------

final_size = os.path.getsize(output_video)

print(f"📦 Final file size: {bytes_to_mb(final_size)} MB")


# -----------------------------
# SIZE REDUCTION INFO
# -----------------------------

reduction = initial_size - final_size
percentage = (reduction / initial_size) * 100

print(f"📉 Size reduced by: {bytes_to_mb(reduction)} MB")
print(f"📊 Reduction percentage: {round(percentage, 2)}%")