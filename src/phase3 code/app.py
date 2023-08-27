from flask import Flask, render_template, request
import pickle
import json

app = Flask(__name__)

model = pickle.load(open('data/final_model.pkl', 'rb'))

with open('data/pairs.json', 'r') as f:
    pairs_json = json.load(f)

with open('data/tabledata.json', 'r') as f:
    tabledata_json = json.load(f)

@app.route('/')
def hello_world():  # put application's code here
    return render_template("index.html")


@app.route('/predict', methods=['POST'])
def predict():
    inputs = [float(request.form.get('acousticness')) / 100, float(request.form.get('danceability')) / 100,
              float(request.form.get('energy')) / 100, float(request.form.get('loudness')),
              float(request.form.get('speechiness')) / 100]
    prediction = model.predict([inputs])
    print(inputs, prediction)
    if prediction[0] == 0:
        output = "This song has Low Popularity"
    else:
        output = "This song has High Popularity"
    return output


@app.route('/visualization_scatter')
def scatter_plot_view():
    return render_template("visualization_scatter.html",
                           danceability=pairs_json['danceability'],
                           energy=pairs_json['energy'],
                           liveness=pairs_json['liveness'], loudness=pairs_json['loudness'],
                           speechiness=pairs_json['speechiness'], instrumentalness=pairs_json['instrumentalness'])


@app.route('/visualization_table')
def table_view():
    return render_template("visualization_table.html", table_data=tabledata_json[:][2:])


if __name__ == '__main__':
    app.run()
