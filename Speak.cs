using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using System.Runtime.InteropServices;

public class Speak : MonoBehaviour
{

    [DllImport("__Internal")]
    private static extern void Speech(string str);


    public void SpeakOutLoud(string Inp = "Geef een Input")
    {
        Speech(Inp);
    }
}
