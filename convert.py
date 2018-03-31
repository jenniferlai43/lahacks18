import json

with open('data2.json', 'r') as f:
	for line in f:
		j = json.loads(line)

		print(json.dumps({
			'hospital_name': j['hospital_name'],
			'location': j['location'],
		}))
