var franceDiff = 1;
var austriaDiff = 1;
var canadaDiff = -7;

var canada = new Destination("Canada", null,
		canadaDiff, 
		[			
			new Link("http://www.skifernie.com/conditions/mountain-cam.aspx", "Fernie"),
			new Link("http://www.skikimberley.com/conditions/mountain-cam.aspx", "Kimberley"),
			new Link("http://www.panoramaresort.com/the-mountain/webcams", "Panorama"),
			new Link("http://www.revelstokemountainresort.com/CONDITIONS/Webcams.html", "Revelstoke"),		
			new Link("http://www.kickinghorseresort.com/mountain/information/webcam-all.aspx", "Kicking Horse")
		],
		[				
			"http://www.j2ski.com/snow_forecast/Canada/Fernie_mini.html",
			"http://www.j2ski.com/snow_forecast/Canada/Revelstoke_mini.html",
			"http://www.j2ski.com/snow_forecast/Canada/Banff_mini.html"         
		],
		[
			new Link("http://pc.sno.mobi/img/limg/mappic/2010319111018906i.jpg", "Fernie"),
			new Link("http://www.skikimberley.com/images/themountain/Trail_Map_0910.jpg", "Kimberley"),
			new Link("http://www.skikimberley.com/images/themountain/Trail_Map_0910.jpg", "Panorama"),
			new Link("http://www.piste-maps.co.uk/Portals/0/Piste-Maps/Canada/Revelstoke-Piste-Map-Large-Front.jpg", "Revelstoke"),
			new Link("http://www.skiholidayscanada.co.uk/images/kicking-horse-piste-map.jpg", "Kicking Horse")
		]
		)
var stAnton = new Destination("Austria", "St Anton", 
		austriaDiff, 
		[
			new Link("http://webtv.feratel.com/webtv/?bgcolor=2080ff&color1=ffffff&color2=fff265&color3=ffffff&design=960&c0=1&lg=en&pg=7F98D269-5DFE-4FC9-99BF-97B5D8DA821F&t=6&cURL=8kxW2nP69SR05cnJ2w0GvgWx3Fe2bTe7VQdeG78LYiLRnHyZVb2OVBPnRFNgUqkJCZd35Pc1S83sRInOnLhLkQgb0NXA6kAoGg3AjbR3Klbn66W%2FD2VRpE6HcuFlkY7rs%2BnGGuSKLat4vFcnbKuvRg%3D%3D"
			,"St Anton"),
			new Link("http://www.lech-zuers.at/xxl/_lang/en/_season/at2/_area/585621/_subArea/585774/_inc/live-camera/index.html",
			"Lech")
		]
		,[
			"http://www.j2ski.com/snow_forecast/Austria/St_Anton_am_Arlberg_mini.html",
			"http://www.j2ski.com/snow_forecast/Austria/Lech_mini.html"
		],
		[
			new Link("http://ski.intermaps.com/skiarlberg/skimap.asp?map=ost&startdata=lifte&lang=en", "St Anton"),
			new Link("http://ski.intermaps.com/skiarlberg/skimap.asp?map=west&startdata=lifte&lang=en", "Lech"),
			new Link("http://ski.intermaps.com/skiarlberg/KMLs/skiarlberg_googleearth_together.asp?zoom=2&lang=en", "Google Earth")
		]);
		
var chamonix = new Destination("France", "Chamonix", 
		franceDiff, 
		[
			new Link("http://www.chamonix.net/english/webcam/chamcam.htm", "Chamonix")
		],
		[			
			"http://www.j2ski.com/snow_forecast/France/Chamonix_mini.html",
			"http://www.j2ski.com/snow_forecast/France/Argentiere_mini.html"
		], null);	

var tignes = new Destination("France", "Tignes",
		franceDiff, 
		[
			new Link("http://tignes.livecam360.net/lac", "Tignes Le Lac"),
			new Link("http://tignes.livecam360.net/val-claret", "Tignes Val Claret"),
			new Link("http://tignes.livecam360.net/grande-motte", "Tignes Grande Motte"),
			new Link("http://tignes.livecam360.net/toviere", "Tignes Toviere")
		]
		,[
			"http://www.j2ski.com/snow_forecast/France/Tignes_mini.html",
			"http://www.j2ski.com/snow_forecast/France/Val_d_Isere_mini.html"
		],
		[
			new Link("http://cdn2.j2ski.com/piste_maps/o/FR/Tignes_Piste_Map.jpg", "Static Map"),
			new Link("http://www.tignes.net/en/skiing-in-tignes/ski-run-map-28.html", "Interactive Map")
		]);
		
var portesDuSoleil = new Destination("France", "Portes Du Soleil",
		franceDiff, 
		[
			new Link("http://www.avorinet.com/webcams/town-centre", "Avoriaz"),
			new Link("http://www.avorinet.com/webcams/portes-du-soleil", "Pointe des Mossettes"),
			new Link("http://www.avorinet.com/webcams/amara", "Amara"),
			new Link("http://www.avorinet.com/webcams/chatel", "Chatel")
			
		],
		[
			new SnowReport("Morzine", "http://www.j2ski.com/snow_forecast/France/Morzine_mini.html"),
			new SnowReport("Les Gets", "http://www.j2ski.com/snow_forecast/France/Les_Gets_mini.html"),
			new SnowReport("Avoriaz", "http://www.j2ski.com/snow_forecast/France/Avoriaz_mini.html")
            //,new WebServiceSnowReport("Avoriaz", "http://www.myweather2.com/developer/weather.ashx?uac=kHzPMaXEnv&uref=17f70581-af06-4649-bcb0-b87b38b4100b&output=json")
		],
		[
			new Link("http://www.avoriaz.com/en/skiing/all-about-skiing/ski-map", "Portes du Soleil")
		],
		[
	new Link("http://www.worldweatheronline.com/Morzine-weather/Rhone-Alpes/FR.aspx", "World Weather")
]);