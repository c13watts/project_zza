//final boss level

function Zza(game){}
	Zza.prototype = {
		init: function(player, equipped, background){
			this.player = player;
			this.equipped = equipped;
            this.background = background;
		},
		preload: function(){},
		create: function(){
            //enter tha big boss

			game.scale.setGameSize(640, 750);
            this.player = game.add.sprite(730, game.world.height, "TopPlayer");
			this.Zza = game.add.sprite(200, -500, "ZZA");
            this.Zza1Top = game.add.sprite(this.Zza.position.x + 32, this.Zza.position.y + 190, "TentieTop");
            this.Zza1Mid = game.add.sprite(this.Zza.position.x + 32, this.Zza.position.y + 240, "TentieMid");
            this.Zza1Bot = game.add.sprite(this.Zza.position.x + 32, this.Zza.position.y + 300, "TentieBot");

            this.Zza2Top = game.add.sprite(this.Zza.position.x + 74, this.Zza.position.y + 225, "TentieTop");
            this.Zza2Mid = game.add.sprite(this.Zza.position.x + 74, this.Zza.position.y + 275, "TentieMid");
            this.Zza2Bot = game.add.sprite(this.Zza.position.x + 74, this.Zza.position.y + 335, "TentieBot");

            this.Zza3Top = game.add.sprite(this.Zza.position.x + 111, this.Zza.position.y + 225, "TentieTop");
            this.Zza3Mid = game.add.sprite(this.Zza.position.x + 111, this.Zza.position.y + 275, "TentieMid");
            this.Zza3Bot = game.add.sprite(this.Zza.position.x + 111, this.Zza.position.y + 335, "TentieBot");

            this.Zza4Top = game.add.sprite(this.Zza.position.x + 148, this.Zza.position.y + 190, "TentieTop");
            this.Zza4Mid = game.add.sprite(this.Zza.position.x + 148, this.Zza.position.y + 240, "TentieMid");
            this.Zza4Bot = game.add.sprite(this.Zza.position.x + 148, this.Zza.position.y + 300, "TentieBot");
			this.plats = [];
            this.plats[0]= game.add.tileSprite(-100,0,100,750,"leftPlats");
            this.plats[1]= game.add.tileSprite(640,0,70,750,"rightPlats");
            for(var i = 0; i < 2; i++){
				game.physics.enable(this.plats[i]);
				this.plats[i].body.immovable = true;
				this.plats[i].moveDown();
				this.plats[i].moveDown();
				this.plats[i].moveDown();
				this.plats[i].moveDown();
				this.plats[i].moveDown();
				this.plats[i].moveDown();
				this.plats[i].moveDown();
			}
            game.add.tween(this.plats[0]).to({x: -30}, 3000, "Linear", true, 0, 0, false);
            game.add.tween(this.plats[1]).to({x: 570}, 3000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza).to({y: 0}, 5000, "Linear", true, 0, 0, false);//1
            game.add.tween(this.Zza1Top).to({y: 190}, 5000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza1Mid).to({y: 240}, 5000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza1Bot).to({y: 300}, 5000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza2Top).to({y: 225}, 5000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza2Mid).to({y: 275}, 5000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza2Bot).to({y: 335}, 5000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza3Top).to({y: 225}, 5000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza3Mid).to({y: 275}, 5000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza3Bot).to({y: 335}, 5000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza4Top).to({y: 190}, 5000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza4Mid).to({y: 240}, 5000, "Linear", true, 0, 0, false);
            game.add.tween(this.Zza4Bot).to({y: 300}, 5000, "Linear", true, 0, 0, false);//13
           // game.add.tween(this.plats[0].tilePosition).to({y: 720}, 3000, "Linear", true, 0, 0, false);
           // game.add.tween(this.plats[1].tilePosition).to({y: 720}, 3000, "Linear", true, 0, 0, false);
            //play that scary boss music
            //this.BossBGM = game.add.audio("BossTrack");
            //this.BossBGM.loop = true;
			//this.BossBGM.play();
		},
		update: function(){
			this.plats[0].tilePosition.y -=3;
			this.plats[1].tilePosition.y -=3;
		},
		render: function(){}
	}