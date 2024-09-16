import turtle
import time

wn = turtle.Screen()
wn.title("Digital Clock")
wn.bgcolor("black")
wn.setup(width=600, height=600)
wn.tracer(0)  # Turn off screen updates for smooth animation

pen = turtle.Turtle()
pen.hideturtle()
pen.color("white")
pen.speed(0)
pen.up()

def draw_clock(hour, minute, second):
    pen.clear()
    pen.goto(0, 200)
    pen.write(time.strftime("%I:%M:%S %p"), align="center", font=("Courier", 50, "bold"))
    wn.update()

while True:
    draw_clock(time.strftime("%I"), time.strftime("%M"), time.strftime("%S"))
    time.sleep(1)
