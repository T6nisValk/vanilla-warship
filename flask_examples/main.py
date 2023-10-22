from flask import Flask, render_template
from quotes import quotes
from random import randint

app = Flask(__name__)  # template_folder = "templates" - can change the folder name


@app.route("/")
def hello():
    random_number = randint(0, len(quotes) - 1)
    random = quotes[random_number]
    return render_template("firstPage.html", quote=random)


@app.route("/something")
def hello2():
    random_number = randint(0, len(quotes) - 1)
    random = quotes[random_number]
    return render_template("secondPage.html", quote=random)


if __name__ == "__main__":
    app.run(debug=True)
