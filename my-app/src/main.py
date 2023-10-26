import time
import pyautogui

MONITOR_WIDTH = 1920
MONITOR_HEIGHT = 1080

X_POS = 1080
Y_POS = 1034
WIDTH = 820
HEIGHT = 4

while True:
    while True:
        time.sleep(1)
        img1 = pyautogui.screenshot(region=(0, 0, MONITOR_WIDTH, MONITOR_HEIGHT))
        all_white = True
        for y_i in range(HEIGHT):
            for x_i in range(WIDTH):
                if img1.getpixel((X_POS + x_i, Y_POS + y_i)) != (255, 255, 255):
                    all_white = False
                    break
            if not all_white:
                print(f"{time.time()}")
                break

        # 만약에
        if all_white:
            print("모두 하얀색")
            break
    # 다음 강의를 재생한다.
    time.sleep(2)
    # 전체 화면을 푼다. 아무곳이나 클릭하면 처음부터 재생되어 버림 임시적으로 전체화면 버튼 좌표를 입력
    print("전체화면 풀기")
    pyautogui.click(1829, 1057)
    time.sleep(2)
    # 다음 강의 버튼을 누른다.
    next_lecture_button = pyautogui.locateCenterOnScreen("./img/next_lecture_button.PNG")
    #
    # if next_lecture_button is None:
    #     # 2차 대책 강구 but 지금은 시간이 없음
    #     break

    print("다음 강의 재생")
    pyautogui.click(next_lecture_button)
    # 왜 인식을 못 하는겨
    pyautogui.click(785, 563)
    time.sleep(2)

    # 강의자료 인지 확인한다.
    # 일단 스킵

    print("전체 화면")
    #full_screen_button = pyautogui.locateCenterOnScreen("./img/full_screen_button.PNG")
    # 노트북이랑 컴퓨터랑 이미지 해상도가 달라서 그런가 이미지 인식이 안됨
    pyautogui.click(1282, 908)
    time.sleep(1)


