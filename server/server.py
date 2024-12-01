from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# data for the table to show in frontend 
data = [
    {
        "source": "Update 1",
        "description": "Administrators can easily view upcoming events, track attendee counts, and monitor recent activity related to event management.",
        "date_time": "2024-01-25 9:15 AM",
    },
    {
        "source": "Update 2",
        "description": "Administrators can easily view upcoming events, track attendee counts, and monitor recent activity related to event management.",
        "date_time": "2024-04-25 11:15 AM",
    },
    {
        "source": "Update 3",
        "description": "Administrators can easily view upcoming events, track attendee counts, and monitor recent activity related to event management.",
        "date_time": "2024-05-25 10:20 AM",
    },

]


@app.route("/api/alerts", methods=["GET"])
def get_alerts():
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)