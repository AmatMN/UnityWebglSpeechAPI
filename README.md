# UnityWebglSpeechAPI

Een js library die ik geschreven heb om in een WebGL game die met unity / C# gemaakt is toch de SpeechSynthesis van browsers te kunnen gebruiken. 

## Zo gebruik je het

1. Plaats het Speak.cs bestand en de Plugins folder in je Assets folder in Unity.
2. Maak in de class waar je iets wilt uitspreken een Private Speak Speaker; aan.
3. wanneer je iets uit wil laten spreken roep Speaker.SpeakOutLoud(""); aan en geef de text die je uit wilt laten spreken mee.

## Handig om te weten

  - De SpeechSynthesis kan niet in de Unity editor gebruikt worden. om het te testen moet de applicatie gebouwd worden en in een browser getest worden.
Tijdens het testen in de editor is het handig om de Speaker.SpeakOutLoud() aanroepingen uit te commenten en te vervangen met een Debug.Log 's.

  - De SpeechSynthesis werkt in een browser pas na de eerste input van een gebruiker. 
Wacht dus op de eerste muisklik of toetsenboard input voordat je de SpeechSynthesis gebruikt
