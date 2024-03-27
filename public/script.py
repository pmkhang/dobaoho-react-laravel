import os
import shutil


def check_and_delete_public_zip(file_or_folder):
    current_dir = os.getcwd()
    path = os.path.join(current_dir, file_or_folder)

    if os.path.isfile(path):
        os.remove(path)
        print("Đã xoá tập tin " + file_or_folder)
    elif os.path.isdir(path):
        shutil.rmtree(path)
        print("Đã xoá thư mục " + file_or_folder)
    else:
        print("Không tìm thấy " + file_or_folder)


if __name__ == "__main__":
    check_and_delete_public_zip("build")
    check_and_delete_public_zip("hot")
