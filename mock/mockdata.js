export const mockData = [
    {
        floor: '25F',
        detail: [
            {
                room: 'CR 25.1',
                status: 'AVAILABLE'
            },
            {
                room: 'VCR 25.2',
                status: 'UNKNOWN'
            },
            {
                room: 'CR 25.3',
                status: 'AVAILABLE'
            },
            {
                room: 'CR 25.4',
                status: 'OCCUPIED'
            },
            {
                room: 'VCR 25.5',
                status: 'OCCUPIED'
            }
        ]
    },
    {
        floor: '24F',
        detail: [
            {
                room: 'CR 24.1',
                status: 'OCCUPIED'
            },
            {
                room: 'VCR 24.2',
                status: 'AVAILABLE'
            },
            {
                room: 'CR 24.3',
                status: 'AVAILABLE'
            },
            {
                room: 'CR 24.4',
                status: 'OCCUPIED'
            },
            {
                room: 'VCR 24.5',
                status: 'UNKNOWN'
            }
        ]
    },
    {
        floor: '...',
        detail: [
            {
                room: '...',
                status: 'AVAILABLE'
            }
        ]
    }
];

export const mockData2 = [
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