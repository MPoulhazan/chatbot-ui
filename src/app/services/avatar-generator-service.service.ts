import { Injectable } from '@angular/core';
import * as seedrandom from 'seedrandom';
import { Constants } from '../utils/constants';
import { SharedService } from './shared.service';

@Injectable({
    providedIn: 'root',
})
export class AvatarGeneratorServiceService {
    userAvatar: string;
    private randomAvatarId: string;

    constructor(private sharedService: SharedService) {
        const savedAvatar = this.sharedService.getParam(
            SharedService.AVATAR_KEY
        );
        this.randomAvatarId = savedAvatar
            ? savedAvatar
            : Math.random().toString(36).substring(7);
    }
    readonly AVATAR_API_URL = Constants.AVATAR_API_URL;

    getUserAvatar(isDentist: boolean): string {
        this.generateRandomAvatar(true);
        const today = new Date();

        if (isDentist) {
            // Month start at 0 so december == 11
            if (today.getMonth() === 11) {
                return Constants.AVATAR_DENTIST_CHRISTMAS_PATH;
            }
            return Constants.AVATAR_DENTIST_PATH;
        } else {
            return this.userAvatar;
        }
    }

    generateNewUserAvatar(): void {
        this.randomAvatarId = Math.random().toString(36).substring(7);
        this.sharedService.saveParams(
            SharedService.AVATAR_KEY,
            this.randomAvatarId
        );
        this.generateRandomAvatar(true);
        this.sharedService.newAvatar$.next(true);
    }

    private generateRandomAvatar(seed?: boolean) {
        const topTypeOptions = new Array<string>();
        topTypeOptions.push(
            'NoHair',
            'Eyepatch',
            'Hat',
            'LongHairBigHair',
            'LongHairBob',
            'LongHairBun',
            'LongHairCurly',
            'LongHairCurvy',
            'LongHairDreads',
            'LongHairFrida',
            'LongHairFro',
            'LongHairFroBand',
            'LongHairNotTooLong',
            'LongHairShavedSides',
            'LongHairMiaWallace',
            'LongHairStraight',
            'LongHairStraight2',
            'LongHairStraightStrand',
            'ShortHairDreads01',
            'ShortHairDreads02',
            'ShortHairFrizzle',
            'ShortHairShaggyMullet',
            'ShortHairShortCurly',
            'ShortHairShortFlat',
            'ShortHairShortRound',
            'ShortHairShortWaved',
            'ShortHairSides',
            'ShortHairTheCaesar',
            'ShortHairTheCaesarSidePart'
        );

        const accessoriesTypeOptions = new Array<string>();
        accessoriesTypeOptions.push(
            'Blank',
            'Blank',
            'Blank',
            'Blank',    // More avatar without glasses
            'Blank',
            'Blank',
            'Prescription01',
            'Prescription02',
            'Round'
        );

        const facialHairTypeOptions = new Array<string>();
        facialHairTypeOptions.push(
            'Blank',
            'Blank',
            'Blank',
            'Blank',
            'Blank',
            'BeardMedium',
            'BeardLight',
            'BeardMagestic',
            'MoustacheFancy',
            'MoustacheMagnum'
        );

        const facialHairColorOptions = new Array<string>();
        facialHairColorOptions.push(
            'Auburn',
            'Black',
            'Blonde',
            'BlondeGolden',
            'Brown',
            'BrownDark',
            'Platinum',
            'Red'
        );

        const clotheTypeOptions = new Array<string>();
        clotheTypeOptions.push(
            'BlazerShirt',
            'BlazerSweater',
            'CollarSweater',
            'GraphicShirt',
            'Hoodie',
            'Overall',
            'ShirtCrewNeck',
            'ShirtScoopNeck',
            'ShirtVNeck'
        );

        const eyeTypeOptions = new Array<string>();
        eyeTypeOptions.push(
            'Close',
            'Default',
            'Dizzy',
            'EyeRoll',
            'Happy',
            'Side',
            'Squint',
            'Surprised',
            'Wink',
            'WinkWacky'
        );

        const eyebrowTypeOptions = new Array<string>();
        eyebrowTypeOptions.push(
            'Default',
            'DefaultNatural',
            'FlatNatural',
            'RaisedExcited',
            'RaisedExcitedNatural',
            'SadConcerned',
            'SadConcernedNatural',
            'UnibrowNatural',
            'UpDown',
            'UpDownNatural'
        );

        const mouthTypeOptions = new Array<string>();
        mouthTypeOptions.push(
            'Default',
            'Disbelief',
            'Serious',
            'Smile'
        );

        const skinColorOptions = new Array<string>();
        skinColorOptions.push(
            'Tanned',
            'Yellow',
            'Pale',
            'Light',
            'Brown',
            'DarkBrown',
            'Black'
        );

        const hairColorTypes = new Array<string>();
        hairColorTypes.push(
            'Auburn',
            'Black',
            'Blonde',
            'BlondeGolden',
            'Brown',
            'BrownDark',
            'PastelPink',
            'Platinum',
            'Red',
            'SilverGray'
        );

        const hatColorOptions = new Array<string>();
        hatColorOptions.push(
            'Black',
            'Blue01',
            'Blue02',
            'Blue03',
            'Gray01',
            'Gray02',
            'Heather',
            'PastelBlue',
            'PastelGreen',
            'PastelOrange',
            'PastelRed',
            'PastelYellow',
            'Pink',
            'Red',
            'White'
        );

        const clotheColorOptions = new Array<string>();
        clotheColorOptions.push(
            'Black',
            'Blue01',
            'Blue02',
            'Blue03',
            'Gray01',
            'Gray02',
            'Heather',
            'PastelBlue',
            'PastelGreen',
            'PastelOrange',
            'PastelRed',
            'PastelYellow',
            'Pink',
            'Red',
            'White'
        );

        const rng = seed ? seedrandom(this.randomAvatarId) : seedrandom();

        this.userAvatar = `${this.AVATAR_API_URL}?accessoriesType=${
            accessoriesTypeOptions[
                Math.floor(rng() * accessoriesTypeOptions.length)
            ]
        }&avatarStyle=Transparent&clotheColor=${
            clotheColorOptions[Math.floor(rng() * clotheColorOptions.length)]
        }&clotheType=${
            clotheTypeOptions[Math.floor(rng() * clotheTypeOptions.length)]
        }&eyeType=${
            eyeTypeOptions[Math.floor(rng() * eyeTypeOptions.length)]
        }&eyebrowType=${
            eyebrowTypeOptions[Math.floor(rng() * eyebrowTypeOptions.length)]
        }&facialHairColor=${
            facialHairColorOptions[
                Math.floor(rng() * facialHairColorOptions.length)
            ]
        }&facialHairType=${
            facialHairTypeOptions[
                Math.floor(rng() * facialHairTypeOptions.length)
            ]
        }&hairColor=${
            hairColorTypes[Math.floor(rng() * hairColorTypes.length)]
        }&hatColor=${
            hatColorOptions[Math.floor(rng() * hatColorOptions.length)]
        }&mouthType=${
            mouthTypeOptions[Math.floor(rng() * mouthTypeOptions.length)]
        }&skinColor=${
            skinColorOptions[Math.floor(rng() * skinColorOptions.length)]
        }&topType=${topTypeOptions[Math.floor(rng() * topTypeOptions.length)]}`;
    }
}
