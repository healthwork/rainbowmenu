import {Emoji} from "./Emoji";

export class EmojiConstants
{
    public static LOADING = "assets/icons/color/source.gif";

    public static APPLE = "emojis/apple/";
    public static FLATICON = "emojis/flaticon/";
    public static TWITTER = "emojis/twitter/";
    public static GOOGLE = "emojis/google/";
    public static EMOJIPEDIA = "emojis/emojipedia/";
    public static FACEBOOK = "emojis/facebook/";
    public static WHATSAPP = "emojis/whatsapp/";
    public static OTHER = "emojis/other/";

//-------------------Ethnicity-----------------------------------------------------------------------------------------------------

    public static CHOPSTICKS = new Emoji(EmojiConstants.APPLE + "chopsticks.png", "chopsticks", "asian");
    public static BLACK_CHESS_QUEEN = new Emoji(EmojiConstants.APPLE + "black_chess_queen.png", "black_chess_queen", "black");
    public static VANILLA_ICE_CREAM = new Emoji(EmojiConstants.APPLE + "vanilla_ice_cream.png", "icecream", "white");
    public static HOT_PEPPER = new Emoji(EmojiConstants.APPLE + "hot_pepper.png", "hot_pepper", "latinx");
    public static CAMEL = new Emoji(EmojiConstants.APPLE + "camel.png", "camel", "middle eastern");

//-------------------BodyType-----------------------------------------------------------------------------------------------------

    public static SLIM = new Emoji(EmojiConstants.TWITTER + "leafy_green.png", "leafy_green", "slim");
    public static ATHLETIC_SHOE = new Emoji(EmojiConstants.TWITTER + "athletic_shoe.png", "athletic_shoe", "fit");
    public static AVERAGE = new Emoji(EmojiConstants.APPLE + "scales.png", "scales", "avg");
    public static HOURGLASS = new Emoji(EmojiConstants.APPLE + "hourglass.png", "hourglass", "curvy");
    public static CANDY = new Emoji(EmojiConstants.GOOGLE + "candy.png", "candy", "BBW");

//-------------------HairColor-----------------------------------------------------------------------------------------------------

    public static FOX = new Emoji(EmojiConstants.APPLE + "fox_face.png", "fox", "red");
    public static LION = new Emoji(EmojiConstants.APPLE + "lion_face.png", "lion", "blonde");
    public static BEAR = new Emoji(EmojiConstants.APPLE + "bear_face.png", "bear", "brown");
    public static CAT = new Emoji(EmojiConstants.EMOJIPEDIA + "cat.png", "cat2", "black");
    public static WOLF = new Emoji(EmojiConstants.APPLE + "wolf_face.png", "wolf", "grey");

//-------------------ChestType-----------------------------------------------------------------------------------------------------

    public static CHERRIES = new Emoji(EmojiConstants.APPLE + "cherries.png", "cherries");
    public static LEMON = new Emoji(EmojiConstants.APPLE + "lemon.png", "lemon");
    public static MELON = new Emoji(EmojiConstants.APPLE + "melon.png", "melon");
    public static WATERMELON = new Emoji(EmojiConstants.APPLE + "watermelon.png", "watermelon");
    public static HUNDRED_POINTS = new Emoji(EmojiConstants.APPLE + "hundred_points.png", "one_hundred", "real");

//-------------------GroomingType-----------------------------------------------------------------------------------------------------

    public static SHAVED = new Emoji(EmojiConstants.EMOJIPEDIA + "razor.png", "razor", "shaved");
    public static SCISSORS = new Emoji(EmojiConstants.APPLE + "black_scissors.png", "scissors", "trimmed");
    public static BUSH = new Emoji(EmojiConstants.APPLE + "deciduous_tree.png", "deciduous_tree", "natural");
    //public static SUSHI = new Emoji(EmojiConstants.APPLE + "sushi.png");
    //public static LANDING_STRIP = new Emoji(EmojiConstants.GOOGLE + "airplane_arriving.png");

//-------------------Tattoos-----------------------------------------------------------------------------------------------------

    public static PAINT_BRUSH = new Emoji(EmojiConstants.GOOGLE + "paintbrush.png", "paint_brush", "tattoo-small/discrete");
    public static PALETTE = new Emoji(EmojiConstants.APPLE + "artist_palette.png", "art", "tattoo-couple");
    public static SLEEVE = new Emoji(EmojiConstants.APPLE + "frame_with_picture.png", "painting", "tattoo-large/sleeve");

    public static PIERCINGS = new Emoji(EmojiConstants.WHATSAPP + "olympic_rings.png", "olympic_rings", "piercings: many");

//-------------------Age/Height/Gender-----------------------------------------------------------------------------------------------------

    public static EARTH = new Emoji(EmojiConstants.APPLE + "earth_globe.png", "earth_americas");
    public static FEET = new Emoji(EmojiConstants.FACEBOOK + "footprints.png", "footprints");

    public static HONEY_POT = new Emoji(EmojiConstants.APPLE + "honey_pot.png", "honey_pot", "F");
    public static EGGPLANT = new Emoji(EmojiConstants.FLATICON + "eggplant.png", "eggplant", "M");

//-------------------INFO-----------------------------------------------------------------------------------------------------

    public static AGENCY = new Emoji(EmojiConstants.APPLE + "dark_sunglasses.png", "sunglasses", "agency");
    public static INDEPENDENT = new Emoji(EmojiConstants.APPLE + "flexed_biceps.png", "muscle", "independent");

    public static RAINBOW = new Emoji(EmojiConstants.GOOGLE + "rainbow.png", "rainbow", "everything");
    public static UMBRELLA_WITH_RAIN_DROPS = new Emoji(EmojiConstants.APPLE + "umbrella_with_rain_drops.png", "umbrella", "safe");

//-------------------Actions-----------------------------------------------------------------------------------------------------

    public static TONGUE = new Emoji(EmojiConstants.FLATICON + "tongue.png", "tongue");
    public static KISS = new Emoji(EmojiConstants.FLATICON + "kiss.png", "kiss");
    public static MOUTH = new Emoji(EmojiConstants.APPLE + "mouth.png", "mouth");

    public static POINT_RIGHT = new Emoji(EmojiConstants.FLATICON + "point_right.png", "point_right");
    public static OK_HAND = new Emoji(EmojiConstants.FLATICON + "ok_hand.png", "ok_hand");
    public static FIST = new Emoji(EmojiConstants.FLATICON + "fist.png", "fist");
    public static HANDS = new Emoji(EmojiConstants.APPLE + "open_hands_sign.png", "open_hands");

    public static PEACH = new Emoji(EmojiConstants.FLATICON + "peach.png", "peach");
    public static FOOT = new Emoji(EmojiConstants.GOOGLE + "foot.png", "foot");
    public static SWEAT_DROPS = new Emoji(EmojiConstants.FLATICON + "sweat_drops.png", "sweat_drops");

    public static HERB = new Emoji(EmojiConstants.FLATICON + "herb.png", "herb");
    public static KNIFE_FORK_PLATE = new Emoji(EmojiConstants.FLATICON + "knife_fork_plate.png", "fork_and_knife_with_plate");
    public static CANCER = new Emoji(EmojiConstants.FLATICON + "cancer.png", "cancer");
    public static FLAG_FR = new Emoji(EmojiConstants.FLATICON + "flag_fr.png", "french_flag");
    public static INBOX_TRAY = new Emoji(EmojiConstants.APPLE + "inbox_tray.png", "inbox_tray");
    public static GIVE = new Emoji(EmojiConstants.APPLE + "wrapped_present.png", "gift", "give");
    public static RECEIVE = new Emoji(EmojiConstants.APPLE + "telephone_receiver.png", "telephone_receiver", "receive");
    public static WATER = new Emoji(EmojiConstants.GOOGLE + "water_wave.png", "water");
    public static BASKETBALL = new Emoji(EmojiConstants.APPLE + "basketball.png", "basketball");
    public static SOCCERBALL = new Emoji(EmojiConstants.GOOGLE + "soccerball.png", "soccerball");
    public static STADIUM = new Emoji(EmojiConstants.APPLE + "stadium.png", "stadium");
    public static NIGHT = new Emoji(EmojiConstants.GOOGLE + "night_with_stars.png", "night_with_stars", "overnight");
    public static TRAVEL = new Emoji(EmojiConstants.APPLE + "airplane.png", "airplane", "travel");

    public static TROPICAL_DRINK = new Emoji(EmojiConstants.APPLE + "tropical_drink.png", "tropical_drink");
    public static COCKTAIL_GLASS = new Emoji(EmojiConstants.APPLE + "cocktail_glass.png", "cocktail");
    public static BEER_MUG = new Emoji(EmojiConstants.APPLE + "beer_mug.png", "beer");

//-------------------Rate Box-----------------------------------------------------------------------------------------------------

    public static INCALL = new Emoji(EmojiConstants.APPLE + "love_hotel.png", "love_hotel", "incall");
    public static OUTCALL = new Emoji("uber.png", "uber", "outcall");

    public static ONE_OCLOCK = new Emoji(EmojiConstants.EMOJIPEDIA + "one_oclock.png", "clock1", "hour");
    public static SUN = new Emoji(EmojiConstants.APPLE + "sun.png", "sunny", "day");

    public static INFINITY = new Emoji(EmojiConstants.TWITTER + "infinity.png", "infinity");
    public static ALARM = new Emoji(EmojiConstants.APPLE + "alarm_clock.png", "alarm_clock");


    public static ROSE_QUARTER = new Emoji(EmojiConstants.APPLE + "rose_quarter.png", "quarter_rose", "25");
    public static ROSE_HALF = new Emoji(EmojiConstants.APPLE + "rose_half.png", "half_rose", "50");
    public static ROSE = new Emoji(EmojiConstants.APPLE + "rose.png", "rose", "100");
    public static DIAMOND_QUARTER = new Emoji(EmojiConstants.APPLE + "gem_stone_quarter.png", "quarter_diamond", "250");
    public static DIAMOND_HALF = new Emoji(EmojiConstants.APPLE + "gem_stone_half.png", "half_diamond", "500");
    public static DIAMOND = new Emoji(EmojiConstants.APPLE + "gem_stone.png", "diamond", "1000");
    public static GOLD_QUARTER = new Emoji(EmojiConstants.EMOJIPEDIA + "black_diamond_suit_quarter.png", "quarter_gold", "2500");
    public static GOLD_HALF = new Emoji(EmojiConstants.EMOJIPEDIA + "black_diamond_suit_half.png", "half_gold", "5000");
    public static GOLD = new Emoji(EmojiConstants.EMOJIPEDIA + "black_diamond_suit.png", "gold", "10000");
    public static RED_ORANGE = new Emoji(EmojiConstants.OTHER + "orange_moron.png", "red_orange", "130000");

//-------------------Payment-----------------------------------------------------------------------------------------------------

    public static XMR = new Emoji("xmr.png", "xmr", "monero");
    public static DOLLAR = new Emoji(EmojiConstants.APPLE + "dollar.png", "paper");
    public static ENVELOPE_WITH_ARROW = new Emoji(EmojiConstants.APPLE + "envelope_with_arrow.png", "envelope");
    public static BTC = new Emoji("btc.png", "btc", "bitcoin");
    public static BCH = new Emoji("bch.png", "bch", "bitcoincash");
    public static LTC = new Emoji("ltc.png", "ltc", "litecoin");
    public static ETH = new Emoji("eth.png", "eth", "ethereum");
    public static CREDITCARD = new Emoji(EmojiConstants.APPLE + "creditcard.png", "cc", "creditcard");
    public static CASHAPP = new Emoji("cashapp.png", "square_cashapp");
    public static VENMO = new Emoji("venmo.png", "venmo");
    public static PAYPAL = new Emoji("paypal.png", "paypal");
    public static GOOGLE_PAY = new Emoji("google_pay.png", "google_pay");
    public static APPLE_PAY = new Emoji("apple_pay.png", "apple_pay");

//-------------------Keycap Digits-----------------------------------------------------------------------------------------------------

    public static ZERO = new Emoji(EmojiConstants.GOOGLE + "keycap_digit_zero.png", "zero");
    public static ONE = new Emoji(EmojiConstants.GOOGLE + "keycap_digit_one.png", "one");
    public static TWO = new Emoji(EmojiConstants.GOOGLE + "keycap_digit_two.png", "two");
    public static THREE = new Emoji(EmojiConstants.GOOGLE + "keycap_digit_three.png", "three");
    public static FOUR = new Emoji(EmojiConstants.GOOGLE + "keycap_digit_four.png", "four");
    public static FIVE = new Emoji(EmojiConstants.GOOGLE + "keycap_digit_five.png", "five");
    public static SIX = new Emoji(EmojiConstants.GOOGLE + "keycap_digit_six.png", "six");
    public static SEVEN = new Emoji(EmojiConstants.GOOGLE + "keycap_digit_seven.png", "seven");
    public static EIGHT = new Emoji(EmojiConstants.GOOGLE + "keycap_digit_eight.png", "eight");
    public static NINE = new Emoji(EmojiConstants.GOOGLE + "keycap_digit_nine.png", "nine");
}
