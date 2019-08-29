import { Component, OnInit } from "@angular/core";
import { NGXLogger } from "ngx-logger";

import * as html2canvas from "html2canvas";
import * as piexif from "../shared/piexif";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ExpressionsService } from "../shared/expressions.service";
import { Expression } from "../shared/Expression";
import { EmojiConstants } from "../shared/EmojiConstants";
import { Category } from "../shared/Category";
import { DigitCounterComponent } from "../digit-counter/digit-counter.component";

import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
    selector: "app-rainbowmenu",
    templateUrl: "./rainbowmenu.component.html",
    styleUrls: ["./rainbowmenu.component.css"],
    providers:  [ NgbModal, ExpressionsService ]
})
export class RainbowmenuComponent  implements OnInit
{
    exifObject: Object;
    image: any;
    rainbowCounter = 5;

    loading = EmojiConstants.LOADING;

    blob: SafeUrl;

    readonly safeSet = this.getSafeSet();
    readonly unsafeSet = this.getUnSafeSet();

    rateCategoryMapList = [];
    rateObject = [];

    socials = [];

    appearanceCategoryLists = [
        new Category(this.expressionsService.getEthnicityList(), true),
        new Category(this.expressionsService.getBodyTypeList(), true),
        new Category(this.expressionsService.getHairColorTypes(), true),
        new Category(this.expressionsService.getChestTypes(), true),
        new Category(this.expressionsService.getGroomingList(), true),
        new Category(this.expressionsService.getTattoos(), false)
    ];

    REAL = new Category([new Expression([EmojiConstants.HUNDRED_POINTS], false)], false);
    PIERCINGS = new Category([new Expression([EmojiConstants.PIERCINGS], false)], false);

    EARTH = new Expression([EmojiConstants.EARTH], false);
    FEET = new Expression([EmojiConstants.FEET], false);
    SCALE = new Expression([EmojiConstants.AVERAGE], false);
    genderCategory = new Category(this.expressionsService.getGenderList(), true);
    TRANS = new Category([new Expression([EmojiConstants.TRANS], false)], false);

    affiliationCategory = new Category(this.expressionsService.getAffiliationList(), true);
    serviceSelectorCategory = new Category(this.expressionsService.getServiceSelector(), true, 0);

    servicesCategory = new Category(this.expressionsService.getServicesList(), false);

    paymentsCategory = new Category(this.expressionsService.getPaymentsList(), false);

    socialsCategory = new Category(this.expressionsService.getSocialsList(), false);

    year = -1;
    heightFeet = -1;
    heightInches = -1;
    weight = -1;

    constructor
    (
        private LOGGER: NGXLogger,
        private modalService: NgbModal,
        private expressionsService: ExpressionsService,
        private domSanitizer: DomSanitizer,
    ){}

//--------------------------------------------------------------------------------------------------------------------------------

    getSafeSet(): Set<string>
    {
        const set = new Set<string>();

        set.add("CFS");
        set.add("CBJ");
        set.add("CANL");
        set.add("C69");
        set.add("CDATY");
        set.add("CHJ");
        set.add("CFIA (G)");
        set.add("CFIA (R)");
        set.add("CFIV");
        set.add("massage");
        set.add("MFF");
        set.add("FMM");
        set.add("CFJ");
        set.add("CTS (G)");
        set.add("CTS (R)");
        set.add("420");
        set.add("OVN");
        set.add("travel");
        set.add("drinks");

        return set;
    }

    getUnSafeSet(): Set<string>
    {
        const set = new Set<string>();

        set.add("FS");
        set.add("FSTC");
        set.add("BBBJTC");
        set.add("BBBJTCWS");
        set.add("ANL");
        set.add("69");
        set.add("RJ (G)");
        set.add("RJ (R)");
        set.add("DATY");
        set.add("HJ");
        set.add("FIA (G)");
        set.add("FIA (R)");
        set.add("FIV");
        set.add("COT");
        set.add("FJ");
        set.add("TS (G)");
        set.add("TS (R)");
        set.add("WS (G)");
        set.add("WS (R)");
        set.add("LK");
        set.add("FK");

        return set;
    }

    updateWeight(event: number)
    {
        this.weight = event;
    }

    updateYear(event: number)
    {
        this.year = event;
    }

    convertInchesToCentimeters(inches: number): number
    {
        if(inches < 0)
            return -1;

        return (inches * 2.54);
    }

    convertPoundsToKilograms(pounds: number): number
    {
        if(pounds === -1)
            return -1;

        return (pounds * 0.45);
    }

    updateFeet(event: number)
    {
        this.heightFeet = event;

        if(this.heightInches === -1)
            this.heightInches = 0;
    }

    updateInches(event: number)
    {
        this.heightInches = event;

        if(this.heightFeet === -1)
            this.heightFeet = 5;
    }

    addRate()
    {
        if(this.rateCategoryMapList.length > 17)
            return;

        const map = new Map<string, Category>();

        const RED_ORANGE = new Expression([EmojiConstants.RED_ORANGE], true);

        map.set("LOCATION", new Category(this.expressionsService.getLocationList(), true));
        map.set("TIME_UNITS", new Category(this.expressionsService.getTimeUnits(), true, 0));
        map.set("FRACTIONAL_RATE", new Category(this.expressionsService.getPartialRosesList(), false));
        map.set("FRACTIONAL_ROSES", new Category(this.expressionsService.getPartialRosesList(), false));
        map.set("FRACTIONAL_DIAMONDS", new Category(this.expressionsService.getPartialDiamondsList(), false));
        map.set("FRACTIONAL_GOLD", new Category(this.expressionsService.getPartialGoldList(), false));
        map.set("RATE", new Category(this.expressionsService.getRoses(), true));
        map.set("100", new Category(this.expressionsService.getRoses(), true));
        map.set("1000", new Category(this.expressionsService.getDiamonds(), true));
        map.set("10000", new Category(this.expressionsService.getGold(), true));
        map.set("130000", new Category([RED_ORANGE], false));
        map.set("RATE_UNITS", new Category(this.expressionsService.getRateUnitButtonsList(), true));
        map.set("SESSION_LENGTH", new Category(this.expressionsService.getSessionLength(), true));

        map.get("TIME_UNITS").setSelectedExpression(0);
        map.get("RATE_UNITS").setSelectedExpression(1);
        map.get("130000").setSelectedExpression(0);

        this.rateObject.push({"timeDays": 0, "timeHours": 0, "timeMinutes": 0, "fractional_rate": 0, "rate": 0});
        this.rateCategoryMapList.push(map);
    }

    removeRate()
    {
        if(this.rateCategoryMapList.length > 1)
        {
            this.rateCategoryMapList.pop();
            this.rateObject.pop();
        }
    }

//--------------------------------------------------------------------------------------------------------------------------------

    formatTime(rateObject: any): number
    {
        if(rateObject["timeDays"] !== 0)
        {
            return rateObject["timeDays"];
        }

        let sum = rateObject["timeHours"];

        if(rateObject["timeMinutes"] === 15)
            sum += 0.25;
        else if(rateObject["timeMinutes"] === 30)
            sum += 0.5;

        return sum;
    }

//--------------------------------------------------------------------------------------------------------------------------------

    enableDigits(elems: DigitCounterComponent[], expression: Expression)
    {
        if(!expression.isEnabled)
        {
            expression.flipEnabled();
            elems.forEach(elem => elem.cycleDigit(0));
        }
    }

//--------------------------------------------------------------------------------------------------------------------------------

    private selectSafe()
    {
        this.servicesCategory.expressionList.forEach(expression =>
        {
            if(this.safeSet.has(expression.getDefinition()))
                expression.enable();
            else
                expression.disable();
        });

        this.rainbowCounter = this.safeSet.size;
    }

    private selectRainbow()
    {
        this.servicesCategory.expressionList.forEach(unit => unit.enable());

        this.rainbowCounter = this.safeSet.size + this.unsafeSet.size;
    }

    selectServicesGroup(event: Expression)
    {
        if(event.getDefinition().toLocaleLowerCase() === "safe")
            this.selectSafe();

        else
            this.selectRainbow();
    }

    private isSafe(): boolean
    {
        for(let x = 0; x < this.servicesCategory.expressionList.length; x++)
        {
            if(this.unsafeSet.has(this.servicesCategory.expressionList[x].getDefinition()) &&
                this.servicesCategory.expressionList[x].isEnabled)
            {
                return false;
            }
        }

        return true;
    }

    checkIsStillSafe(event: Expression)
    {
        event.flipEnabled();

        if(event.isEnabled)
        {
            this.rainbowCounter += 1;

            if(this.rainbowCounter === (this.safeSet.size + this.unsafeSet.size))
            {
                this.serviceSelectorCategory.selectCategoryExpression(1);

                return;
            }
        }
        else
            this.rainbowCounter -= 1;

        if(this.isSafe())
        {
            this.serviceSelectorCategory.selectCategoryExpression(0);

            return;
        }

        this.serviceSelectorCategory.reset();
    }

//--------------------------------------------------------------------------------------------------------------------------------

    capture(content)
    {
        const options =
        {
            logging: false,
            //width: 1000,
            scale: 2, backgroundColor: "beige",
            //x: -100,
            //windowWidth: 10
        };

        this.image = null;

        this.modalService.open(content, {windowClass: "dark-modal", size: "lg"});

        html2canvas(document.getElementById("capture"), options).then(canvas =>
        {
            const imageData = canvas.toDataURL("image/jpeg", 1.0);

            this.exifObject = this.getObject();

            this.image = this.writeExif(imageData, this.exifObject);

            this.blob = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.dataURIToBlob(this.image)));

            this.print(this.image);
        });
    }

    saveBlob()
    {
        document.getElementById("rainbowmenu").click();
    }

    dataURIToBlob(dataURI): Blob
    {
        const binStr = atob(dataURI.split(",")[1]);
        const len = binStr.length;
        const arr = new Uint8Array(len);
        const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

        for(let i = 0; i < len; i++)
        {
            arr[i] = binStr.charCodeAt(i);
        }

        return new Blob([arr], {
            type: mimeString
        });
    }

    getName(expression: Expression): string
    {
        if(expression != null && expression.isEnabled)
            return expression.getShortCode();

        return null;
    }

    getObject()
    {
        const userComment =
            {
                "0": this.getName(this.appearanceCategoryLists[0].getSelectedExpression()),
                "1": this.getName(this.appearanceCategoryLists[1].getSelectedExpression()),
                "2": this.getName(this.appearanceCategoryLists[2].getSelectedExpression()),
                "3":
                    [
                        this.getName(this.appearanceCategoryLists[3].getSelectedExpression()),
                        this.getName(this.REAL.getSelectedExpression())
                    ],
                "4": this.getName(this.appearanceCategoryLists[4].getSelectedExpression()),
                "5": this.getName(this.appearanceCategoryLists[5].getSelectedExpression()),
                "6": this.getName(this.PIERCINGS.getSelectedExpression()),
                "7": this.year,
                "8":
                    [
                        this.heightFeet.toString() + "ft " + this.heightInches.toString() + "in",
                        this.convertInchesToCentimeters((12*this.heightFeet) + this.heightInches) + "cm"
                    ],
                "9":
                    [
                        this.weight.toString() + "lbs",
                        this.convertPoundsToKilograms(this.weight) + "kg"
                    ],
                "10":
                    [
                        this.getName(this.genderCategory.getSelectedExpression()),
                        this.getName(this.TRANS.getSelectedExpression())
                    ],
                "11": this.getName(this.affiliationCategory.getSelectedExpression()),
                "12": this.getName(this.serviceSelectorCategory.getSelectedExpression()),
                "13": [],
                "14": [],
                "15": [],
                "16": this.socials
            };

        this.servicesCategory.expressionList.forEach(expression =>
        {
            if(expression != null && expression.isEnabled)
            {
                //this.LOGGER.info(expression.name);
                userComment["13"].push(expression.getShortCode());
            }
        });

        let x = 0;

        this.rateCategoryMapList.forEach(map =>
        {
            //this.updateRedOrange(x, map);
            userComment["14"].push([]);

            userComment["14"][userComment["14"].length - 1]
                .push(this.getName((map as Map<string, Category>).get("LOCATION").getExpression(0)));
            userComment["14"][userComment["14"].length - 1]
                .push(this.getName((map as Map<string, Category>).get("LOCATION").getExpression(1)));
            userComment["14"][userComment["14"].length - 1]
                .push(this.getName((map as Map<string, Category>).get("TIME_UNITS").getSelectedExpression()));
            userComment["14"][userComment["14"].length - 1]
                .push(this.formatTime(this.rateObject[x]));
            userComment["14"][userComment["14"].length - 1]
                .push(this.getName((map as Map<string, Category>).get("RATE").getExpression(0)));
            userComment["14"][userComment["14"].length - 1]
                .push(this.rateObject[x]["rate"] + this.rateObject[x]["fractional_rate"]);
            userComment["14"][userComment["14"].length - 1]
                .push(this.getName((map as Map<string, Category>).get("SESSION_LENGTH").getSelectedExpression()));

            x++;
        });

        this.paymentsCategory.expressionList.forEach(expression =>
        {
            if(expression != null && expression.isEnabled)
            {
                //this.LOGGER.info(expression.name);
                userComment["15"].push(expression.getShortCode());
            }
        });

        this.LOGGER.info(userComment);

        return userComment;
    }

    writeExif(imageData: string, exifObject: Object)
    {
        // make exif data
        const zerothIfd = {};
        const exifIfd = {};
        const gpsIfd = {};

        const exifObj = {"0th":zerothIfd, "Exif":exifIfd, "GPS":gpsIfd};

        //exifIfd[piexif.ExifIFD.DateTimeOriginal] = new Date();
        zerothIfd[piexif.ImageIFD.ImageDescription] = "{\"url\": \"https://rainbowmenu.earth\", \"version\": \"1.3.0\"}";
        exifIfd[piexif.ExifIFD.UserComment] = JSON.stringify(exifObject);

        //this.getObject();

        // get exif binary as "string" type
        const exifBytes = piexif.dump(exifObj);

        // insert exif binary into JPEG binary(DataURL)
        return piexif.insert(exifBytes, imageData);
    }

    print(dataURL)
    {
        const exif = piexif.load(dataURL);

        //this.LOGGER.info("TAGS: ", piexif.TAGS["Image"]);
        //this.LOGGER.info("DateTime: ", exif["Exif"]["36867"]);
        this.LOGGER.info("ImageDescription: ", exif["0th"]["270"]);
        this.LOGGER.info("UserComment: ", exif["Exif"]["37510"]);
    }

    ngOnInit()
    {
        this.addRate();
    }
}
