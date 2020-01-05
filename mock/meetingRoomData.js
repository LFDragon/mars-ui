const mockData = [
    {
        "country": "China",
        "city": "Guangzhou",
        "location": "TKHOT2",
        "floor": "24F",
        "rooms": [
            {
                "id": 1,
                "country": "China",
                "city": "Guangzhou",
                "location": "TKHOT2",
                "floor": "24F",
                "name": "CR24.4",
                "remark": "Special testing room 24.4 for MARS PoC",
                "updateTimestamp": "2019-12-27T18:39:40.256+08:00",
                "status": "OCCUPIED"
            },
            {
                "id": 2,
                "country": "China",
                "city": "Guangzhou",
                "location": "TKHOT2",
                "floor": "24F",
                "name": "VCR24.5",
                "remark": "Special testing room 24.5 for MARS PoC",
                "updateTimestamp": "2019-12-27T18:39:40.256+08:00",
                "status": "OCCUPIED"
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
                "id": 3,
                "country": "China",
                "city": "Guangzhou",
                "location": "TKHOT2",
                "floor": "25F",
                "name": "CR25.4",
                "remark": "Special testing room 25.4 for MARS PoC",
                "updateTimestamp": "2019-12-27T18:39:40.256+08:00",
                "status": "AVAILABLE"
            },
            {
                "id": 4,
                "country": "China",
                "city": "Guangzhou",
                "location": "TKHOT2",
                "floor": "25F",
                "name": "VCR25.5",
                "remark": "Special testing room 25.5 for MARS PoC",
                "updateTimestamp": "2019-12-27T18:39:40.256+08:00",
                "status": "UNKNOWN"
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