from flask import Flask, render_template, request, redirect, url_for, session, flash
import json
import os

app = Flask(__name__)
app.secret_key = "my_key"

admin_user = {"username": "t6nis", "password": "admin", "is_admin": True}
users = []


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/login", methods=["GET", "POST"])
def login_page():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        if username == admin_user["username"] and password == admin_user["password"]:
            session["username"] = username
            session["is_admin"] = True
            return redirect(url_for("admin_page"))

        for user in users:
            if user["username"] == username and user["password"] == password:
                session["username"] = username
                session["is_admin"] = False
                flash("Login successful! Welcome back, {}!".format(username), "success")
                return redirect(url_for("home"))

    return render_template("login.html")


@app.route("/admin_page")
def admin_page():
    if "username" in session and session["is_admin"]:
        return render_template("admin.html", username=session["username"])
    else:
        return redirect(url_for("login_page"))


@app.route("/logout")
def logout():
    session.pop("username", None)
    session.pop("is_admin", None)
    return redirect(url_for("home"))


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        for user in users:
            if user["username"] == username:
                flash("Username already taken. Please choose a different one.", "error")
                return render_template("register.html")

        users.append({"username": username, "password": password})
        return redirect(url_for("home"))

    return render_template("register.html")


if __name__ == "__main__":
    app.run(debug=True)
