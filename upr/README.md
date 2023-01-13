# UPR ZX

[This](https://kittypboxx.github.io/GBAXG/upr/UniversalPokemonRandomizer.zip) is a modified copy of the Universal Pokemon Randomizer that can be found [here](https://github.com/Ajarmar/universal-pokemon-randomizer-zx). Universal Pokemon Randomizer is licenced under [GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007](https://github.com/Ajarmar/universal-pokemon-randomizer-zx/blob/master/LICENSE.txt).

Only minor modifications have been made to the original code to help prevent crashes when modifying gen 3 roms. The modified methods are as follows:
<br><br>

## *Gen3RomHandler.java*

`

    private EncounterSet readWildArea(int offset, int numOfEntries, String setName) {
        EncounterSet thisSet = new EncounterSet();
        thisSet.rate = rom[offset];
        thisSet.displayName = setName;
        // Grab the *real* pointer to data
        int dataOffset = readPointer(offset + 4);
        // Read the entries
        for (int i = 0; i < numOfEntries; i++) {
            // min, max, species, species
            Encounter enc = new Encounter();
            enc.level = (dataOffset + i * 4) <= 0 ? 5 : rom[dataOffset + i * 4];
            enc.maxLevel = (dataOffset + i * 4 <= 0) ? 5 : rom[dataOffset + i * 4 + 1];
            try {
                enc.pokemon = (dataOffset + i * 4 + 2)  <= 0 ? pokesInternal[16] : pokesInternal[readWord(dataOffset + i * 4 + 2)];
            } catch (ArrayIndexOutOfBoundsException ex) {
                throw ex;
            }
            thisSet.encounters.add(enc);
        }
        return thisSet;
    }

    private void writeWildArea(int offset, int numOfEntries, EncounterSet encounters) {
        // Grab the *real* pointer to data
        int dataOffset = readPointer(offset + 4);

        if (dataOffset <= 0) {
            return;
        }

        // Write the entries
        for (int i = 0; i < numOfEntries; i++) {
            Encounter enc = encounters.encounters.get(i);
            // min, max, species, species
            int levels = enc.level | (enc.maxLevel << 8);
            writeWord(dataOffset + i * 4, levels);
            writeWord(dataOffset + i * 4 + 2, pokedexToInternal[enc.pokemon.number]);
        }
    }

`

