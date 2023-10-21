from flask import Flask, render_template

app = Flask(__name__)  # template_folder = "templates" - can change the folder name


@app.route("/")
def hello():
    name = "Tõnis"
    tiny_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return render_template("base.html", name=name, tiny_list=tiny_list)


if __name__ == "__main__":
    app.run(debug=True)
