import { db } from '../db/index';
import { cards, cardMonsterTypes, monsterTypes } from '../db/schema';
import { eq } from 'drizzle-orm';


export class YGOProDeckService {
    static readonly YGOPRODECK_API = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

    private mapRestriction(limit?: string) {
        switch (limit?.toUpperCase()) {
            case 'FORBIDDEN': return 0;
            case 'LIMITED': return 1;
            case 'SEMI-LIMITED': return 2;
            default: return 3;
        }
    }

    private mapSummonType(frameType: string) {
        switch (frameType.toUpperCase()) {
            case 'NORMAL': return 'NORMAL';
            case 'EFFECT': return 'NORMAL';
            case `*_PENDULUM`: return 'PENDULUM';
            case 'SYNCHRO': return 'SYNCHRO';
            case 'XYZ': return 'XYZ';
            case 'LINK': return 'LINK';
            case 'RITUAL': return 'RITUAL';
            default: return null;
        }
    }

    private mapAttribute(apiCard: any) {
        if (apiCard.attribute) {
            return apiCard.attribute.toUpperCase();
        } 
        
        if (apiCard.frameType.toUpperCase() === 'SPELL') {
            return 'SPELL';
        }

        if (apiCard.frameType.toUpperCase() === 'TRAP') {
            return 'TRAP';
        }
    }
}

export const ygoProDeckService = new YGOProDeckService();