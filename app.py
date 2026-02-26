from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # Allows frontend to connect

# Sample Indian dishes data
dishes = [
    
]

@app.route("/api/dishes", methods=["GET"])
def get_dishes():
    return jsonify(dishes)

if __name__ == "__main__":
    app.run(debug=True)