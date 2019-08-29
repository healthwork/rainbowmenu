import { Injectable } from "@angular/core";
import { Expression } from "./Expression";
import {EmojiConstants} from "./EmojiConstants";

@Injectable()
export class ExpressionsService
{
//-------------------Expressions-----------------------------------------------------------------------------------------------------

    envelope = [EmojiConstants.DOLLAR, EmojiConstants.ENVELOPE_WITH_ARROW];

    coveredFullService = [EmojiConstants.POINT_RIGHT, EmojiConstants.OK_HAND, EmojiConstants.SWEAT_DROPS, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS];
    fullService = [EmojiConstants.POINT_RIGHT, EmojiConstants.OK_HAND, EmojiConstants.SWEAT_DROPS];
    fullServiceXFinishInside = [EmojiConstants.POINT_RIGHT, EmojiConstants.OK_HAND, EmojiConstants.SWEAT_DROPS, EmojiConstants.INBOX_TRAY];


    coveredSixtyNine = [EmojiConstants.UMBRELLA_WITH_RAIN_DROPS, EmojiConstants.SWEAT_DROPS, EmojiConstants.CANCER, EmojiConstants.SWEAT_DROPS, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS];
    sixtyNine = [EmojiConstants.SWEAT_DROPS, EmojiConstants.CANCER, EmojiConstants.SWEAT_DROPS];

    coveredAnal = [EmojiConstants.EGGPLANT, EmojiConstants.PEACH, EmojiConstants.SWEAT_DROPS, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS];
    anal = [EmojiConstants.EGGPLANT, EmojiConstants.PEACH, EmojiConstants.SWEAT_DROPS];

    coveredRimJob = [EmojiConstants.KNIFE_FORK_PLATE, EmojiConstants.PEACH, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS];
    rimJobGive = [EmojiConstants.KNIFE_FORK_PLATE, EmojiConstants.PEACH, EmojiConstants.GIVE];
    rimJobReceive = [EmojiConstants.KNIFE_FORK_PLATE, EmojiConstants.PEACH, EmojiConstants.RECEIVE];

    CBJ = [EmojiConstants.MOUTH, EmojiConstants.EGGPLANT, EmojiConstants.SWEAT_DROPS, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS];
    BBBJ = [EmojiConstants.MOUTH, EmojiConstants.EGGPLANT, EmojiConstants.SWEAT_DROPS];
    BBBJTCWS = [EmojiConstants.MOUTH, EmojiConstants.EGGPLANT, EmojiConstants.SWEAT_DROPS, EmojiConstants.KNIFE_FORK_PLATE];


    coveredDATY = [EmojiConstants.TONGUE, EmojiConstants.HONEY_POT, EmojiConstants.SWEAT_DROPS, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS];
    barebackDATY = [EmojiConstants.TONGUE, EmojiConstants.HONEY_POT, EmojiConstants.SWEAT_DROPS];

    coveredHandJob = [EmojiConstants.FIST, EmojiConstants.EGGPLANT, EmojiConstants.SWEAT_DROPS, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS];
    handJob = [EmojiConstants.FIST, EmojiConstants.EGGPLANT, EmojiConstants.SWEAT_DROPS];

    coveredFingerInHoneyPot = [EmojiConstants.POINT_RIGHT, EmojiConstants.HONEY_POT, EmojiConstants.SWEAT_DROPS, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS];
    fingerInHoneyPot = [EmojiConstants.POINT_RIGHT, EmojiConstants.HONEY_POT, EmojiConstants.SWEAT_DROPS];

    coveredFingerInPeachGive = [EmojiConstants.POINT_RIGHT, EmojiConstants.PEACH, EmojiConstants.SWEAT_DROPS, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS, EmojiConstants.GIVE];
    fingerInPeachGive = [EmojiConstants.POINT_RIGHT, EmojiConstants.PEACH, EmojiConstants.SWEAT_DROPS, EmojiConstants.GIVE];

    coveredFingerInPeachReceive = [EmojiConstants.POINT_RIGHT, EmojiConstants.PEACH, EmojiConstants.SWEAT_DROPS, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS, EmojiConstants.RECEIVE];
    fingerInPeachReceive = [EmojiConstants.POINT_RIGHT, EmojiConstants.PEACH, EmojiConstants.SWEAT_DROPS, EmojiConstants.RECEIVE];

    coveredTF = [EmojiConstants.EGGPLANT, EmojiConstants.WATERMELON, EmojiConstants.WATERMELON, EmojiConstants.SWEAT_DROPS, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS];
    tf = [EmojiConstants.EGGPLANT, EmojiConstants.WATERMELON, EmojiConstants.WATERMELON, EmojiConstants.SWEAT_DROPS];

    mff = [EmojiConstants.EGGPLANT, EmojiConstants.HONEY_POT, EmojiConstants.HONEY_POT];
    fmm = [EmojiConstants.HONEY_POT, EmojiConstants.EGGPLANT, EmojiConstants.EGGPLANT];

    footJob = [EmojiConstants.FOOT,EmojiConstants.FOOT, EmojiConstants.EGGPLANT, EmojiConstants.SWEAT_DROPS];
    coveredFootJob = [EmojiConstants.FOOT,EmojiConstants.FOOT, EmojiConstants.EGGPLANT, EmojiConstants.SWEAT_DROPS, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS];

    toeSuckGive = [EmojiConstants.MOUTH,EmojiConstants.FOOT, EmojiConstants.GIVE];
    coveredToeSuckGive = [EmojiConstants.MOUTH,EmojiConstants.FOOT, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS, EmojiConstants.GIVE];

    toeSuckReceive = [EmojiConstants.MOUTH,EmojiConstants.FOOT, EmojiConstants.RECEIVE];
    coveredToeSuckReceive = [EmojiConstants.MOUTH,EmojiConstants.FOOT, EmojiConstants.UMBRELLA_WITH_RAIN_DROPS, EmojiConstants.RECEIVE];

    goldenShowerGive = [EmojiConstants.WATER, EmojiConstants.BASKETBALL, EmojiConstants.SOCCERBALL, EmojiConstants.STADIUM, EmojiConstants.GIVE];
    goldenShowerReceive = [EmojiConstants.WATER, EmojiConstants.BASKETBALL, EmojiConstants.SOCCERBALL, EmojiConstants.STADIUM, EmojiConstants.RECEIVE];

    massage = [EmojiConstants.HANDS];

    kiss = [EmojiConstants.KISS];
    frenchKiss = [EmojiConstants.FLAG_FR, EmojiConstants.KISS];

    herbFriendly = [EmojiConstants.HERB];
    overNight = [EmojiConstants.NIGHT];
    travel = [EmojiConstants.TRAVEL];

    //single = [EmojiConstants.ONE_OCLOCK, EmojiConstants.SWEAT_DROPS, EmojiConstants.TWO_OCLOCK];
    //multiple = [EmojiConstants.ONE_OCLOCK, EmojiConstants.SWEAT_DROPS, EmojiConstants.INFINITY, EmojiConstants.SWEAT_DROPS, EmojiConstants.TWO_OCLOCK];

    single = [EmojiConstants.SWEAT_DROPS, EmojiConstants.ALARM];
    multiple = [EmojiConstants.SWEAT_DROPS, EmojiConstants.INFINITY, EmojiConstants.ALARM];

    drinks = [EmojiConstants.COCKTAIL_GLASS, EmojiConstants.BEER_MUG];

//-------------------Lists-----------------------------------------------------------------------------------------------------

    getEthnicityList(): Expression[]
    {
        return [
            new Expression([EmojiConstants.CHOPSTICKS], false),
            new Expression([EmojiConstants.BLACK_CHESS_QUEEN], false),
            new Expression([EmojiConstants.VANILLA_ICE_CREAM], false),
            new Expression([EmojiConstants.HOT_PEPPER], false),
            new Expression([EmojiConstants.COW], false),
            new Expression([EmojiConstants.CAMEL], false)
        ];
    }

    getBodyTypeList(): Expression[]
    {
        return [
            new Expression([EmojiConstants.SLIM], false),
            new Expression([EmojiConstants.ATHLETIC_SHOE], false),
            new Expression([EmojiConstants.AVERAGE], false),
            new Expression([EmojiConstants.HOURGLASS], false),
            new Expression([EmojiConstants.CANDY], false)
        ];
    }

    getHairColorTypes(): Expression[]
    {
        return [
            new Expression([EmojiConstants.FOX], false),
            new Expression([EmojiConstants.LION], false),
            new Expression([EmojiConstants.BEAR], false),
            new Expression([EmojiConstants.CAT], false),
            new Expression([EmojiConstants.WOLF], false),
        ];
    }

    getChestTypes(): Expression[]
    {
        return [
            new Expression([EmojiConstants.CHERRIES], false, "small"),
            new Expression([EmojiConstants.LEMON, EmojiConstants.LEMON], false, "medium"),
            new Expression([EmojiConstants.MELON, EmojiConstants.MELON], false, "medium-large"),
            new Expression([EmojiConstants.WATERMELON, EmojiConstants.WATERMELON], false, "large")
        ];
    }

    getGroomingList(): Expression[]
    {
        return [
            new Expression([EmojiConstants.SHAVED], false),
            new Expression([EmojiConstants.SCISSORS], false),
            new Expression([EmojiConstants.BUSH], false)
            //new Expression("blank", [this.sushi], false),
            //new Expression("blank", [EmojiConstants.landing_strip], false),
        ];
    }

    getTattoos(): Expression[]
    {
        return [
            new Expression([EmojiConstants.PAINT_BRUSH], false),
            new Expression([EmojiConstants.PALETTE], false),
            new Expression([EmojiConstants.SLEEVE], false)
        ];
    }

    getGenderList()
    {
        return [
            new Expression([EmojiConstants.HONEY_POT], false),
            new Expression([EmojiConstants.EGGPLANT], false)
        ];
    }

    getAffiliationList()
    {
        return [
            new Expression([EmojiConstants.INDEPENDENT], false),
            new Expression([EmojiConstants.AGENCY], false)
        ];
    }

    getServiceSelector()
    {
        return [
            new Expression([EmojiConstants.UMBRELLA_WITH_RAIN_DROPS], true),
            new Expression([EmojiConstants.RAINBOW], false)
        ];
    }

    getServicesList(): Expression[]
    {
        return [
            /*0*/new Expression(this.coveredFullService, true, "CFS"),
            /*1*/new Expression(this.fullService, false, "FS"),
            /*2*/new Expression(this.fullServiceXFinishInside, false, "FSTC"),
            /*3*/new Expression(this.CBJ, true, "CBJ"),
            /*4*/new Expression(this.BBBJ, false, "BBBJTC"),
            /*5*/new Expression(this.BBBJTCWS, false, "BBBJTCWS"),
            /*6*/new Expression(this.coveredAnal, false, "CANL"),
            /*7*/new Expression(this.anal, false, "ANL"),
            /*8*/new Expression(this.coveredSixtyNine, true, "C69"),
            /*9*/new Expression(this.sixtyNine, false, "69"),
            /*10*/new Expression(this.rimJobGive, false, "RJ (G)"),
            /*11*/new Expression(this.rimJobReceive, false, "RJ (R)"),
            /*12*/new Expression(this.coveredDATY, false, "CDATY"),
            /*13*/new Expression(this.barebackDATY, false, "DATY"),
            /*14*/new Expression(this.coveredHandJob, true, "CHJ"),
            /*15*/new Expression(this.handJob, false, "HJ"),
            /*16*/new Expression(this.coveredFingerInPeachGive, false, "CFIA (G)"),
            /*17*/new Expression(this.fingerInPeachGive, false, "FIA (G)"),
            /*18*/new Expression(this.coveredFingerInPeachReceive, false, "CFIA (R)"),
            /*19*/new Expression(this.fingerInPeachReceive, false, "FIA (R)"),
            /*20*/new Expression(this.coveredFingerInHoneyPot, true, "CFIV"),
            /*21*/new Expression(this.fingerInHoneyPot, false, "FIV"),
            /*22*/new Expression(this.tf, false, "COT"),
            /*23*/new Expression(this.massage, false, "massage"),
            /*24*/new Expression(this.mff, false, "MFF"),
            /*25*/new Expression(this.fmm, false, "FMM"),
            /*26*/new Expression(this.coveredFootJob, false, "CFJ"),
            /*27*/new Expression(this.footJob, false, "FJ"),
            /*28*/new Expression(this.coveredToeSuckGive, false, "CTS (G)"),
            /*30*/new Expression(this.toeSuckGive, false, "TS (G)"),
            /*31*/new Expression(this.coveredToeSuckReceive, false, "CTS (R)"),
            /*32*/new Expression(this.toeSuckReceive, false, "TS (R)"),
            /*33*/new Expression(this.goldenShowerGive, false, "WS (G)"),
            /*34*/new Expression(this.goldenShowerReceive, false, "WS (R)"),
            /*35*/new Expression(this.kiss, false, "LK"),
            /*36*/new Expression(this.frenchKiss, false, "FK"),
            /*37*/new Expression(this.herbFriendly, false, "420"),
            /*38*/new Expression(this.overNight, false, "OVN"),
            /*39*/new Expression(this.travel, false, "travel"),
            /*40*/new Expression(this.drinks, false, "drinks")
        ];
    }

    getPaymentsList(): Expression[]
    {
        return [
            new Expression([EmojiConstants.XMR], false),
            new Expression(this.envelope, true, "envelope"),
            new Expression([EmojiConstants.BTC], false),
            new Expression([EmojiConstants.BCH], false),
            new Expression([EmojiConstants.LTC], false),
            new Expression([EmojiConstants.ETH], false),
            new Expression([EmojiConstants.CREDITCARD], false),
            new Expression([EmojiConstants.CASHAPP], false),
            new Expression([EmojiConstants.VENMO], false),
            new Expression([EmojiConstants.PAYPAL], false),
            new Expression([EmojiConstants.GOOGLE_PAY], false),
            new Expression([EmojiConstants.APPLE_PAY], false)
        ];
    }

    getSocialsList(): Expression[]
    {
        return [
          new Expression([EmojiConstants.PHONE], false),
          new Expression([EmojiConstants.EMAIL], false),
          new Expression([EmojiConstants.URL], false),
          new Expression([EmojiConstants.INSTAGRAM], false),
          new Expression([EmojiConstants.TWITTER_LOGO], false),
          new Expression([EmojiConstants.SWITTER], false),
        ];
    }

//-------------------Rate Box-----------------------------------------------------------------------------------------------------

    getLocationList(): Expression[]
    {
        return [
            new Expression([EmojiConstants.INCALL], false),
            new Expression([EmojiConstants.OUTCALL], false)
        ];
    }

    getTimeUnits()
    {
        return [
            new Expression([EmojiConstants.ONE_OCLOCK], true),
            new Expression([EmojiConstants.SUN], false)
        ];
    }

    getPartialRosesList(): Expression[]
    {
        return [
            new Expression([EmojiConstants.ROSE_QUARTER], false),
            new Expression([EmojiConstants.ROSE_HALF], false)
        ];
    }

    getRoses(): Expression[]
    {
        return [
            new Expression([EmojiConstants.ROSE], false),
            new Expression([EmojiConstants.ROSE], false),
            new Expression([EmojiConstants.ROSE], false),
            new Expression([EmojiConstants.ROSE], false),
            new Expression([EmojiConstants.ROSE], false),
            new Expression([EmojiConstants.ROSE], false),
            new Expression([EmojiConstants.ROSE], false),
            new Expression([EmojiConstants.ROSE], false),
            new Expression([EmojiConstants.ROSE], false)
        ];
    }

    getPartialDiamondsList(): Expression[]
    {
        return [
            new Expression([EmojiConstants.ROSE_HALF], false),
            new Expression([EmojiConstants.ROSE], false),
            new Expression([EmojiConstants.ROSE], false),
            new Expression([EmojiConstants.DIAMOND_QUARTER], false),
            new Expression([EmojiConstants.DIAMOND_HALF], false)
        ];
    }

    getDiamonds(): Expression[]
    {
        return [
            new Expression([EmojiConstants.DIAMOND], false),
            new Expression([EmojiConstants.DIAMOND], false),
            new Expression([EmojiConstants.DIAMOND], false),
            new Expression([EmojiConstants.DIAMOND], false),
            new Expression([EmojiConstants.DIAMOND], false),
            new Expression([EmojiConstants.DIAMOND], false),
            new Expression([EmojiConstants.DIAMOND], false),
            new Expression([EmojiConstants.DIAMOND], false),
            new Expression([EmojiConstants.DIAMOND], false)
        ];
    }

    getPartialGoldList(): Expression[]
    {
        return [
            new Expression([EmojiConstants.DIAMOND], false),
            new Expression([EmojiConstants.DIAMOND], false),
            new Expression([EmojiConstants.GOLD_QUARTER], false),
            new Expression([EmojiConstants.GOLD_HALF], false),
        ];
    }

    getGold(): Expression[]
    {
        return [
            new Expression([EmojiConstants.GOLD], false),
            new Expression([EmojiConstants.GOLD], false),
            new Expression([EmojiConstants.GOLD], false),
            new Expression([EmojiConstants.GOLD], false),
            new Expression([EmojiConstants.GOLD], false),
            new Expression([EmojiConstants.GOLD], false),
            new Expression([EmojiConstants.GOLD], false),
            new Expression([EmojiConstants.GOLD], false),
            new Expression([EmojiConstants.GOLD], false)
        ];
    }

    getRateUnitButtonsList()
    {
        return [
            new Expression([EmojiConstants.ROSE], false),
            new Expression([EmojiConstants.DIAMOND], false),
            new Expression([EmojiConstants.GOLD], false),
            new Expression([EmojiConstants.RED_ORANGE], false)
        ];
    }

    getSessionLength(): Expression[]
    {
        return [
            new Expression(this.single, false, "one O"),
            new Expression(this.multiple, false, "multiple O")
        ];
    }

//-------------------Key Caps-----------------------------------------------------------------------------------------------------

    getDigits(isEnabled: boolean): Expression[]
    {
        return [
            new Expression([EmojiConstants.ZERO], isEnabled),
            new Expression([EmojiConstants.ONE], isEnabled),
            new Expression([EmojiConstants.TWO], isEnabled),
            new Expression([EmojiConstants.THREE], isEnabled),
            new Expression([EmojiConstants.FOUR], isEnabled),
            new Expression([EmojiConstants.FIVE], isEnabled),
            new Expression([EmojiConstants.SIX], isEnabled),
            new Expression([EmojiConstants.SEVEN], isEnabled),
            new Expression([EmojiConstants.EIGHT], isEnabled),
            new Expression([EmojiConstants.NINE], isEnabled)
        ];
    }
}
