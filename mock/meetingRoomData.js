const mockData = [
    {
        "country": "China",
        "city": "Guangzhou",
        "location": "TKHOT2",
        "floor": "24F",
        "rooms": [
            {
                "room": {
                    "id": 1,
                    "country": "China",
                    "city": "Guangzhou",
                    "location": "TKHOT2",
                    "floor": "24F",
                    "name": "CR24.4",
                    "remark": "Special testing room 24.4 for MARS PoC",
                    "updateTimestamp": "2019-12-28T17:02:21"
                },
                "currentStatus": {
                    "id": 1643,
                    "roomId": 1,
                    "status": "AVAILABLE",
                    "updateTimestamp": "2020-01-13T23:57:11"
                }
            },
            {
                "room": {
                    "id": 2,
                    "country": "China",
                    "city": "Guangzhou",
                    "location": "TKHOT2",
                    "floor": "24F",
                    "name": "VCR24.5",
                    "remark": "Special testing room 24.5 for MARS PoC",
                    "updateTimestamp": "2019-12-28T17:02:21"
                },
                "currentStatus": {
                    "id": 8,
                    "roomId": 2,
                    "status": "OCCUPIED",
                    "updateTimestamp": "2019-12-28T16:02:29"
                }
            }
        ]
    },
    {
        "country": "China",
        "city": "Guangzhou",
        "location": "TKHOT2",
        "floor": "25F",
        "rooms": [
            {
                "room": {
                    "id": 3,
                    "country": "China",
                    "city": "Guangzhou",
                    "location": "TKHOT2",
                    "floor": "25F",
                    "name": "CR25.4",
                    "remark": "Special testing room 25.4 for MARS PoC",
                    "updateTimestamp": "2019-12-28T17:02:21"
                },
                "currentStatus": {
                    "id": 13,
                    "roomId": 3,
                    "status": "AVAILABLE",
                    "updateTimestamp": "2019-12-28T16:02:29"
                }
            },
            {
                "room": {
                    "id": 4,
                    "country": "China",
                    "city": "Guangzhou",
                    "location": "TKHOT2",
                    "floor": "25F",
                    "name": "VCR25.5",
                    "remark": "Special testing room 25.5 for MARS PoC",
                    "updateTimestamp": "2019-12-28T17:02:21"
                },
                "currentStatus": {
                    "id": 14,
                    "roomId": 4,
                    "status": "UNKNOWN",
                    "updateTimestamp": "2019-12-28T16:02:29"
                }
            }
        ]
    }
];

export default {
    'get /status/rooms': function (req, res) {
        const responseObj = mockData;
        setTimeout(() => {
            res.json(responseObj);
        }, 1000);
    },
};