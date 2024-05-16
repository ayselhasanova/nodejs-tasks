fetch('http://localhost:5000/workers')
.then((res) => res.json())
.then(data => console.log(data))