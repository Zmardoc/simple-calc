Pozadovany technologie: Vue3 + muze byt nadstavbovy framework vlastni volby (my delame Quasar), ale nemusi byt nic

Vytvor komponentu s textovym polem, ktere ti umozni zadat:
* libovolny ciselny vyraz, napr. 5*10, 5+2, ktery se po opusteni pole vyhodnoti a zobrazi + se propaguje jeho hodnota do modelu
* bezne desetinne cislo 
* cislo ve formatu 5m pro 5 000 000, 5k pro 5 000, 5b pro 5 000 000 000.

Platny vyraz pro toto pole je napr. (5m+2k)-0.5k, ktery se vyhodnoti jako 5 000 1500.

Komponenta zaroven v sobe uchovava posledni zadany vyraz, ze ktereho je dane cislo vypocteno.