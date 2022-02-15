---
title: Beauty of Poetry ✨
date: "2021-06-30"
legacyID: "beauty-of-poetry"
thumbnail: "📘"
published: true
latest: false
description: "Here, in this article, the word Poetry is not referred to as something related to English Literature, history, religion, or stuff. I'm primarily a JavaScript, React developer where the dependency management..."
cover: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/63ddhrkgmy4f0hqbwaof.png"
articleLink: "https://dev.to/ciphertron/beauty-of-poetry-1ne8"
tags:
  - Python
  - Poetry
  - Flask
---

![Drake Hotline Bing Meme on Poetry](https://res.cloudinary.com/pritish007/image/upload/v1625058011/landing_article_hwc4uu.jpg)

> _Disclaimer: Here, in this article, the word "Poetry" is not referred to as something related to English Literature, history, religion, or stuff. :)_

First things first, I'm on a Ubuntu 20.04 LTS operating system. Few things might be different for you according to your operating system. So, without any further ado, lets get started🚀

## List Of Contents:

> PS: If you directly want to get into what's Poetry and its functions, feel free to skip the `Introduction` part.

- [Introduction](#intro)
- [Why Poetry?](#whyp)
- [What's Poetry?](#whatp)
- [Download & Install](#instap)
- [Configure Poetry](#configp)
- [Basic Usage of Poetry](#usagep)
- [Conclusion](#concl)

## # Introduction

I'm primarily a JavaScript, React developer where the dependency management(adding, removing, upgrading) is taken care of by `npm` or `yarn`. I always wanted to try out a Python web framework & that is when I came across Flask which is a lightweight framework to develop web applications, RESTful APIs and much more. In this article, I'll be using some analogies in JavaScript to describe how things work in Python.

Normally, `npm install <dependency>` will install a dependency in that project itself by generating a **node_modules** folder and if we add a `-g` or `--global` flag, it will install the dependency globally. But things are a little different in Python. In Python, we have to create something called a **virtual environment** which is essentially a Python environment such that the Python interpreter, libraries and scripts installed into it are isolated from other virtual environments or those libraries installed in a **System Python** i.e., one which is installed as part of your operating system.

**Lets take an instance for example:** Suppose you're working on a project with five other developers and lets say you have flask version `1.1.2` version installed globally whereas the project requires flask version `1.1.3`. That is where conflicts might or might not arise due to different flask versions. To be on the safer side, we use virtual environments.

## # Why Poetry?

Before coming on to what Poetry actually is, let me explain its use cases and how it makes our life easier. The two major issues that we face using python are:

### 1. Manually creating and managing virtual environments

In python, we can use many ways to make virtual environments with `venv` being its standard library. Few other libraries include `virtualenv`, and `conda`. For beginners, it is recommended to use the `pip` & `virtualenv` combo.
_To create a virtual environment:_

- With `venv`:

```bash
$ python3 -m venv .venv
```

- With `virtualenv`:

```bash
$ virtualenv venv
```

_To activate a virtual environment:_

```bash
$ .venv/Scripts/Activate.ps1
```

Voila! our virtual environment is activated. Now, we can install any dependency using `pip install`. But if you see the process, it is very much time consuming.

### 2. requirements.txt file is too primitive to deal with!

Generally, we can export `requirements.txt` which defines all the dependencies we've installed using `pip`. We can export it by:

```bash
$ pip freeze > requirements.txt
```

What we get from it is a plain text file with all the dependencies as well as their versions listed.

```python
﻿bcrypt==3.2.0
dnspython==2.1.0
email-validator==1.1.2
Flask==1.1.2
Flask-Bcrypt==0.7.1
Flask-Login==0.5.0
Flask-SQLAlchemy==2.5.1
Flask-WTF==0.14.3
gunicorn==20.1.0
itsdangerous==1.1.0
Jinja2==2.11.3
MarkupSafe==1.1.1
Pillow==8.2.0
pycparser==2.20
SQLAlchemy==1.4.7
Werkzeug==1.0.1
WTForms==2.3.3
yapf==0.31.0
```

But again, here we have to lock `requirements.txt` everytime we add or remove a dependency. Also, it becomes difficult to audit all dependencies & bring them up-to date when needed.

Thus, we need something which can isolate the project as well as it can manage our dependencies & their versions as well as lock everything that gets installed just like we have a `package.json` in Javascript which is like a manifest for your project, a place where `npm` or `yarn` stores all the dependencies with their version & `package-lock.json` or `yarn.lock` if you're using `npm` or `yarn` respectively which keeps track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by the maintainers.

This is where **Poetry** comes to rescue and saves us from the above mentioned problems. Let us learn more about what is **Poetry** in the next section.

![Poetry Meme](https://res.cloudinary.com/pritish007/image/upload/v1625066804/5f124d_nx0jvd.jpg)

## # What's Poetry?

So, Poetry is a tool for dependency management and packaging in Python. According to their [official documentation](https://python-poetry.org/), it allows us to declare the libraries our project depends on and it will manage (add/remove/update) them for us. IMO, Poetry is by far best dependency as well as virtual environment management tool I've come across in python programming. Initialising a Poetry project produces two main files, namely `pyproject.toml` which works like a `package.json` & `poetry.lock` that works like `package-lock.json` or `yarn.lock`. In other words, we can say that **Poetry** resembles **npm/yarn**. Bear with me, I won't give much analogies from now onwards XD. Now, let's see how we can download & use Poetry,

## # Download & Install

Poetry has a well documented set of instructions on [how to install](https://python-poetry.org/docs/#installation) it and the best thing is that almost every operating systems (eg: Windows, Linux, MacOS) supports Poetry. Poetry is also available on `PyPi` but it is not recommended to install using pip because it will also install Poetry’s dependencies which might cause conflicts with other packages.

> Prerequisite: If you don't have `curl` installed, you can do so by:

```bash
$ sudo apt update
$ sudo apt install curl
```

_The installation guidelines as stated in the official documentation are listed below!_

```bash
# osx / linux / bashonwindows install instructions
$ curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -

# windows powershell install instructions
$ (Invoke-WebRequest -Uri https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py -UseBasicParsing).Content | python -

# Installing with pip
$ pip install --user poetry
```

Voila! Poetry will be now installed in your system. To confirm it, you can:

```bash
$ poetry --version
Poetry version 1.1.6
```

## # Configure Poetry

Before we get started with Poetry, we have to make sure of some configurations. You can always type `poetry --help` and it'll display the set of commands & arguments and how to use them else refer to their [configuration documentation](https://python-poetry.org/docs/configuration/). I've listed below the required configurations. Make sure you do the same.

```bash
# To list all the configurations
$ poetry config --list
cache-dir = "/home/john/.cache/pypoetry"
experimental.new-installer = true
installer.parallel = true
virtualenvs.create = true
virtualenvs.in-project = true
virtualenvs.path = "{cache-dir}/virtualenvs"  # /home/john/.cache/pypoetry/virtualenvs
```

To change or modify any configuration for instance, `virtualenvs.create`, you can:

```bash
$ poetry config virtualenvs.create false
```

Else, if you want to modify the configuration only for a specific project, Poetry provides a `--local` option to the config command to do the same.

```bash
$ poetry config virtualenvs.create false --local
```

If you want to remove a configuration, you can:

```bash
$ poetry config virtualenvs.path --unset
```

## # Basic Usage of Poetry

Now we are all set to get started with Poetry. Yayy!!
So, we will be initialising a Poetry project in the Desktop directory. To initialise an empty project, we can type:

```bash
~/Desktop$ poetry new poetry-kickstart
Created package poetry_kickstart in poetry-kickstart
```

A new package named `poetry-kickstart` will now be created in your Desktop. We are going to modify the structure a little bit.

We will be having the following contents inside the `poetry-kickstart` package.

```bash
poetry-kickstart
├── pyproject.toml
├── README.rst
├── poetry-kickstart.py
└── tests
    ├── __init__.py
    └── test_poetry_demo.py
```

Then, we will spawn a shell using `poetry shell` command and install `flask`.

```bash
~/Desktop/poetry-kickstart$ poetry shell
Spawning shell within Desktop/poetry-kickstart/.venv
. Desktop/poetry-kickstart/.venv/bin/activate

(.venv) ~/Desktop/poetry-kickstart$ poetry add flask
Using version ^2.0.1 for Flask

Updating dependencies
Resolving dependencies... (0.8s)

Writing lock file

Package operations: 6 installs, 0 updates, 0 removals

  • Installing markupsafe (2.0.1)
  • Installing click (8.0.1)
  • Installing itsdangerous (2.0.1)
  • Installing jinja2 (3.0.1)
  • Installing werkzeug (2.0.1)
  • Installing flask (2.0.1)
```

Spawning a shell will make a virtual environment and automatically activate it. Thus, the contents inside the poetry-kickstart package will be:

```bash
poetry-kickstart
├── .venv
├── poetry.lock
├── pyproject.toml
├── README.rst
├── poetry-kickstart.py
└── tests
    ├── __init__.py
    └── test_poetry_demo.py
```

Now, we are inside a virtual environment with flask installed. Let us make a simple route returning "Hello World!" in `poetry-kickstart.py`.

```python
from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
```

We have a simple route. Now, let's check if it's working or not. But before that, do ensure if your python interpreter is pointing towards the one in the virtual environment.

To check the sample API,

```bash
(.venv) $ poetry run python -m poetry-kickstart
 * Serving Flask app 'poetry-kickstart' (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 117-620-034
```

Hurray!! We now have our flask app up and running. Cheers!
![Running Flask App in Browser](https://res.cloudinary.com/pritish007/image/upload/v1625047379/Screenshot_from_2021-06-30_15-32-45_a6rpao.png)

Again, you can click `ctrl+c` to kill the process & then type `exit` to exit from the virtual environment.

## # Conclusion

This article demonstrates only the basic usage of Poetry. However, there are ton other things that you can do using Poetry. I would prefer their official documentation anytime since it is well structured. But, this is not the end. In my next article, I'll be demonstrating how you can run tests using Poetry, & how to deploy a poetry project to Heroku. Heroku is the go-to service for many developers because it requires less configuration and has quick deployment. But `Heroku` **doesn't have** a standard `buildpack` for Poetry. Thus, we will be using another open-source buildpack for Poetry and trust me, it works just fine. Last but not the least, I would like to thank [The Open Bio-informatics Foundation](https://www.open-bio.org/) for giving me this opportunity & also my mentors [@João Paulo Tiz](https://twitter.com/jptiz1) & [@Yo Yehudi](https://twitter.com/yoyehudi) for their constant support and guidance.
