import os
import zipfile

def exclude_this_file(filename):
    return filename != 'script.py'

def compress_files_and_folders_except_current_python_file(zip_filename):
    current_dir = os.path.dirname(os.path.abspath(__file__))
    with zipfile.ZipFile(zip_filename, 'w') as zipf:
        for root, dirs, files in os.walk(current_dir):
            for filename in files:
                if exclude_this_file(filename):
                    file_path = os.path.join(root, filename)
                    arcname = os.path.relpath(file_path, current_dir)
                    zipf.write(file_path, arcname=arcname)
            for directory in dirs:
                if directory != '__pycache__': 
                    dir_path = os.path.join(root, directory)
                    arcname = os.path.relpath(dir_path, current_dir)
                    zipf.write(dir_path, arcname=arcname)

zip_file_path = '../source.zip'

compress_files_and_folders_except_current_python_file(zip_file_path)
print("done")
