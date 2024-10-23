let fs = require('fs');

let Tools = {
    async fetchURL(url){
        return await (await fetch(url)).text();
    },
    async fetchURLData(url){
        return await (await fetch(url)).arrayBuffer();
    },
};



let PlayStore = {
    BlackCloverM: 'https://play.google.com/store/apps/details?id=com.garena.game.bc',
    GarenaUndawn: 'https://play.google.com/store/apps/details?id=com.garena.game.lmjx',
    PUBGMobile: 'https://play.google.com/store/apps/details?id=com.tencent.ig',
    ZenlessZoneZero: 'https://play.google.com/store/apps/details?id=com.HoYoverse.Nap',
    HonkaiStarRail: 'https://play.google.com/store/apps/details?id=com.HoYoverse.hkrpgoversea',
    GenshinImpact: 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact',
    HonorOfKings: 'https://play.google.com/store/apps/details?id=com.levelinfinite.sgameGlobal',
    FreeFire: 'https://play.google.com/store/apps/details?id=com.dts.freefireth',
    MobileLegendBangbang: 'https://play.google.com/store/apps/details?id=com.mobile.legends',
    HatsuneMikuColorfulStage: 'https://play.google.com/store/apps/details?id=com.sega.ColorfulStage.en',
    ArenaOfValor: 'https://play.google.com/store/apps/details?id=com.garena.game.kgid',
    CallOfDutyMobile: 'https://play.google.com/store/apps/details?id=com.garena.game.codm',
    SpeedDrifters: 'https://play.google.com/store/apps/details?id=com.garena.game.fctw',
    LordsMobile: 'https://play.google.com/store/apps/details?id=com.igg.android.lordsmobile',
    TowerOfFantasy: 'https://play.google.com/store/apps/details?id=com.levelinfinite.hotta.gp',
    SausageMan: 'https://play.google.com/store/apps/details?id=com.GlobalSoFunny.Sausage',
    EggyParty: 'https://play.google.com/store/apps/details?id=com.netease.partyglobal',
    MetalSlugAwakening: 'https://play.google.com/store/apps/details?id=com.vng.sea.metalslug',
    AceRacer: 'https://play.google.com/store/apps/details?id=com.netease.racerna',
    LeagueOfLegendsWildRift: 'https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift',
    EASPORTSFCMobile: 'https://play.google.com/store/apps/details?id=com.ea.gp.fifamobile',
    BloodStrike: 'https://play.google.com/store/apps/details?id=com.netease.newspike',
    RagnarokOrigin: 'https://play.google.com/store/apps/details?id=com.gravity.roo.sea',
    RagnarokMEternalLove: 'https://play.google.com/store/apps/details?id=com.gravity.romg',
    DragonRajaSea: 'https://play.google.com/store/apps/details?id=com.archosaur.sea.dr.gp',
    _8BallPool: 'https://play.google.com/store/apps/details?id=com.miniclip.eightballpool',
    LightOfThelNewEra: 'https://play.google.com/store/apps/details?id=com.lrgame.goc.sea',
    ArenaBreakout: 'https://play.google.com/store/apps/details?id=com.proximabeta.mf.uamo',
    LaplaceM: 'https://play.google.com/store/apps/details?id=com.zlongame.sea.fzdl',
    MangaToon: 'https://play.google.com/store/apps/details?id=mobi.mangatoon.comics.aphone',
    LoveNikki: 'https://play.google.com/store/apps/details?id=com.elex.nikkigp',
    ClashOfClans: 'https://play.google.com/store/apps/details?id=com.supercell.clashofclans',
    HayDay: 'https://play.google.com/store/apps/details?id=com.supercell.hayday',
    ClashRoyale: 'https://play.google.com/store/apps/details?id=com.supercell.clashroyale',
    BrawlStars: 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars',
    TeamfightTacticsMobile: 'https://play.google.com/store/apps/details?id=com.riotgames.league.teamfighttactics',
    Lita: 'https://play.google.com/store/apps/details?id=com.funbit.android',
    RevelationMobile: 'https://play.google.com/store/apps/details?id=vng.games.revelation.mobile',
    StateOfSurvival: 'https://play.google.com/store/apps/details?id=com.kingsgroup.sos',
    IdentityV: 'https://play.google.com/store/apps/details?id=com.netease.idv.googleplay',
    GoddessOfVictoryNikke: 'https://play.google.com/store/apps/details?id=com.proximabeta.nikke',
    HarryPotterMagicAwakened: 'https://play.google.com/store/apps/details?id=com.netease.harrypotter.na',
    SuperSus: 'https://play.google.com/store/apps/details?id=com.je.supersus',
    Farlight84: 'https://play.google.com/store/apps/details?id=com.miraclegames.farlight84',
    PUBGNewState: 'https://play.google.com/store/apps/details?id=com.pubg.newstate',
    SealMSEA: 'https://play.google.com/store/apps/details?id=com.playwith.sealm.sea.googl',
    Megaxus: 'https://play.google.com/store/apps/details?id=com.megaxus.ayodance',
    MarvelSnap: 'https://play.google.com/store/apps/details?id=com.nvsgames.snap',
    HonkaiImpact3: 'https://play.google.com/store/apps/details?id=com.miHoYo.bh3oversea',
    StumbleGuys: 'https://play.google.com/store/apps/details?id=com.kitkagames.fallbuddies',
    KingOfAvalon: 'https://play.google.com/store/apps/details?id=com.funplus.kingofavalon',
    AlchemyStars: 'https://play.google.com/store/apps/details?id=com.tencent.baiyeint',
    PointBlank: 'https://play.google.com/store/apps/details?id=com.zepetto.PointBlank.CompanionApp',
    Au2Mobile: 'https://play.google.com/store/apps/details?id=au2.audition.vtcgame.dancing.aumobile.gamethoitrang',
    // CommandConquerLegions: 'https://play.google.com/store/apps/details?id=com.cncm.games',
    DragonPOW: 'https://play.google.com/store/apps/details?id=com.endragonpow.android',
    EVEEchoes: 'https://play.google.com/store/apps/details?id=com.netease.eve.en',
    WutheringWaves: 'https://play.google.com/store/apps/details?id=com.kurogame.wutheringwaves.global',
    Zepeto: 'https://play.google.com/store/apps/details?id=me.zepeto.main',
    KingsChoice: 'https://play.google.com/store/apps/details?id=com.onemt.and.kc.sea',
    WhiteoutSurvival: 'https://play.google.com/store/apps/details?id=com.gof.global',
    CloudSong: 'https://play.google.com/store/apps/details?id=vng.game.sky.fantasy.song.sea',
    IsekaiFeastTalesOfRecipes: 'https://play.google.com/store/apps/details?id=com.eyougame.msen',
    PokemonUnite: 'https://play.google.com/store/apps/details?id=jp.pokemon.pokemonunite',
    DraconiaSaga: 'https://play.google.com/store/apps/details?id=com.sugarfun.gp.sea.lzgwy',
    Tarisland: 'https://play.google.com/store/apps/details?id=com.ld.trssjhw',
};

!async function(){
    for (let key in PlayStore) {
        let data = await Tools.fetchURL(PlayStore[key]);
        let imageURL = data.split(' reviews</div></div')[0].split('https://play-lh.googleusercontent.com/').pop().split(' ')[0].split('"')[0];
        if(imageURL) imageURL = 'https://play-lh.googleusercontent.com/'+imageURL;
        imageURL = imageURL.replace('=s96', '=s256');

        fs.writeFileSync(`../public/assets/images/external-logo/${key}.webp`, Buffer.from(await Tools.fetchURLData(imageURL)));
    }
}();