var APP_DATA = {
  "scenes": [
    {
      "id": "0-coalyard",
      "name": "Coalyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.11119810566366795,
        "pitch": -0.002430919385073338,
        "fov": 1.3937085184579643
      },
      "linkHotspots": [
        {
          "yaw": -0.07028412103680459,
          "pitch": 0.3048187966801805,
          "rotation": 0,
          "target": "2-cellar"
        },
        {
          "yaw": -0.5800178679800592,
          "pitch": -0.591656905155844,
          "rotation": 0,
          "target": "1-tearoom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2627870782414625,
          "pitch": -0.19029826063954403,
          "title": "Welcome",
          "text": "<div>Welcome to a virtual tour of the heat recovery system at the Penrhyn Castle Tearooms. This system serves as a showcase of the potential to recover heat from the high temperature wastewater produced in commercial kitchens that usually just goes down the drain. Recovering this heat will save money by reducing fuel use and will also reduce the greenhouse gas emissions associated with heating water.&nbsp;&nbsp;</div><div><br></div><div>To start with the tour, please make your way into the tearooms by clicking on the ^ sign near the window above you and to your left.&nbsp;&nbsp;<br></div><div><br></div><div>This project is a collaboration between Bangor University, Trinity College Dublin, and the National Trust. It was made possible due to the support the ERDF Interreg Ireland-Wales Programme 2014-2020, through the Dŵr Uisce Project.</div>"
        }
      ]
    },
    {
      "id": "1-tearoom",
      "name": "Tearoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.0004109392066720119,
        "pitch": 0.33490952906851135,
        "fov": 1.4743580089315886
      },
      "linkHotspots": [
        {
          "yaw": 0.7980979318972796,
          "pitch": -0.05899052597057519,
          "rotation": 0,
          "target": "0-coalyard"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1711682469639655,
          "pitch": -0.01222551329749777,
          "title": "Drain Water from Kitchens",
          "text": "<div>After you enjoy a nice meal or snack at the Penrhyn Castle Tearooms, Tearoom Staff use hot water at a temperature of around 40-50 degrees celsius to clean dirty dishes and cooking utensils. This hot drain water then flows into a drain, through a sewer and to a septic tank within the Penrhyn Castle site, slowly cooling along the way. Our system aims to recover some of this waste heat and reduce water heating costs for the Tearoom kitchen.&nbsp;&nbsp;</div><div><br></div><div>Please continue the tour by clicking on the ^ sign near the window to take you back to the Coalyard and then click on the second ^ sign in front of you to take you to the Cellar area.</div>"
        }
      ]
    },
    {
      "id": "2-cellar",
      "name": "Cellar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.27946168074761424,
        "pitch": -0.18903516160999345,
        "fov": 1.4743580089315886
      },
      "linkHotspots": [
        {
          "yaw": -2.0329777759161516,
          "pitch": -0.12801952558406882,
          "rotation": 0,
          "target": "3-control-room"
        },
        {
          "yaw": -0.8041458368612879,
          "pitch": -0.009579050268996525,
          "rotation": 0,
          "target": "0-coalyard"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.058901937904453305,
          "pitch": -0.4551858366958328,
          "title": "Heat Exchanger",
          "text": "<span data-contrast=\"auto\" style=\"font-size: 11pt; line-height: 19.425px; font-family: Calibri, &quot;Calibri_EmbeddedFont&quot;, &quot;Calibri_MSFontService&quot;, sans-serif;\" xml:lang=\"EN-US\" class=\"TextRun SCXW1634664 BCX2\" lang=\"EN-US\"><span class=\"NormalTextRun SCXW1634664 BCX2\"></span><span class=\"NormalTextRun SCXW1634664 BCX2\">The kitchen drain that was here h</span><span class=\"NormalTextRun SCXW1634664 BCX2\">as been</span><span class=\"NormalTextRun SCXW1634664 BCX2\"> replaced with an insulated copper heat exchanger which heats up clean cold water that is pumped through a series of small copper pipes coiled around a central large copper pipe, through which&nbsp;the drain water flows down. Only heat is transferred through the copper and heats up the cold water which is circulated from and back into the storage tank in the control room.</span></span><div><span data-contrast=\"auto\" style=\"font-size: 11pt; line-height: 19.425px; font-family: Calibri, &quot;Calibri_EmbeddedFont&quot;, &quot;Calibri_MSFontService&quot;, sans-serif;\" xml:lang=\"EN-US\" class=\"TextRun SCXW1634664 BCX2\" lang=\"EN-US\"><span class=\"NormalTextRun SCXW1634664 BCX2\"><br></span></span></div><div><span data-contrast=\"auto\" style=\"font-size: 11pt; line-height: 19.425px; font-family: Calibri, &quot;Calibri_EmbeddedFont&quot;, &quot;Calibri_MSFontService&quot;, sans-serif;\" xml:lang=\"EN-US\" class=\"TextRun SCXW1634664 BCX2\" lang=\"EN-US\"><span class=\"NormalTextRun SCXW1634664 BCX2\">Move around to continue the tour.</span></span></div>"
        },
        {
          "yaw": -2.6894818692883344,
          "pitch": -0.42722225771147926,
          "title": "Monitoring System",
          "text": "No demonstration is complete without an understanding of how well it works! This remote monitoring system collects data about the performance of the system for future research and improvements.<div><br></div><div>Click on the ^ button on the door to continue the tour.</div>"
        }
      ]
    },
    {
      "id": "3-control-room",
      "name": "Control Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.5292288699595726,
        "pitch": -0.13609458543984942,
        "fov": 1.4743580089315886
      },
      "linkHotspots": [
        {
          "yaw": 2.611753057361403,
          "pitch": -0.13812250730034492,
          "rotation": 0,
          "target": "2-cellar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5889466142563169,
          "pitch": -0.5281669998282226,
          "title": "Storage Tank",
          "text": "<span data-contrast=\"auto\" style=\"font-size: 11pt; line-height: 19.425px; font-family: Calibri, &quot;Calibri_EmbeddedFont&quot;, &quot;Calibri_MSFontService&quot;, sans-serif;\" xml:lang=\"EN-US\" class=\"TextRun SCXW122330529 BCX2\" lang=\"EN-US\"><span class=\"NormalTextRun SCXW122330529 BCX2\">W</span><span class=\"NormalTextRun SCXW122330529 BCX2\">ater is pumped out and to the heat exchanger from this tank. It also supplies the Mixing unit with water heated through heat recovery from the drains.&nbsp;</span></span>"
        },
        {
          "yaw": -0.3268418969272737,
          "pitch": 0.08208011987175823,
          "title": "Temperature Probe",
          "text": "A sensor that measures hot water temperature which is recorded in the monitoring station.&nbsp;"
        },
        {
          "yaw": -1.0854073534606563,
          "pitch": -0.22319292675919478,
          "title": "Supply Pump",
          "text": "<span data-contrast=\"auto\" style=\"font-size: 11pt; line-height: 19.425px; font-family: Calibri, &quot;Calibri_EmbeddedFont&quot;, &quot;Calibri_MSFontService&quot;, sans-serif;\" xml:lang=\"EN-US\" class=\"TextRun SCXW240232794 BCX2\" lang=\"EN-US\">This pump supplies heated water to the Mixing Unit.</span>"
        },
        {
          "yaw": 0.028822201928010216,
          "pitch": -0.10770993139045437,
          "title": "Recirculation Pump",
          "text": "This pump transfers cold water into and warm water out of the heat exchanger.&nbsp;"
        },
        {
          "yaw": 0.2778040736060525,
          "pitch": -0.09587300158065659,
          "title": "Piping",
          "text": "These pipes lead cold water to and hot water from from the heat exchanger in the cellar, see if you can follow them all the way to the heat exchanger!"
        },
        {
          "yaw": 0.29572691387389227,
          "pitch": 0.13420797696920417,
          "title": "Piping",
          "text": "These pipes lead cold water to and hot water from the heat exchanger in the cellar, see if you can follow them all the way to the heat exchanger!"
        },
        {
          "yaw": -1.9895550053924325,
          "pitch": -0.5794979882160494,
          "title": "Mixing Unit",
          "text": "This unit mixes the water heated by the heat exchanger from the storage tank with water heated by the Castle’s boilers to supply hot water at a suitable temperature to the Tearoom kitchens.&nbsp;"
        },
        {
          "yaw": 3.0604502128664564,
          "pitch": -0.13296927864668007,
          "title": "Thank you",
          "text": "Once you finish looking around this room, this concludes our tour. Thank you for your interest in our project!&nbsp;"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
