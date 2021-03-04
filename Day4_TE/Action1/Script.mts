
SystemUtil.CloseProcessByName "RumbaPage.exe"
SystemUtil.Run "c:\Users\Administrator\Desktop\RPA\CICS.rsdm"

TeWindow("TeWindow").TeScreen("Si").TeField("USERID").Set "SYSAD" @@ hightlight id_;_746_;_script infofile_;_ZIP::ssf1.xml_;_
TeWindow("TeWindow").TeScreen("Si").TeField("Password").SetSecure "6040b7cc770988d928c15208a478ea3a" @@ hightlight id_;_826_;_script infofile_;_ZIP::ssf2.xml_;_
'TeWindow("TeWindow").TeScreen("Si").TeField("Password").SetCursorPos 5 @@ hightlight id_;_826_;_script infofile_;_ZIP::ssf3.xml_;_
TeWindow("TeWindow").TeScreen("Si").SendKey TE_ENTER @@ hightlight id_;_7958_;_script infofile_;_ZIP::ssf4.xml_;_
'TeWindow("TeWindow").TeScreen("Si").Sync
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SendKey "ACCT" @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf5.xml_;_
'TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SetCursorPos 1,5 @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf6.xml_;_
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SendKey TE_ENTER @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf7.xml_;_
'TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").Sync
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("REQUEST TYPE").Set "M" @@ hightlight id_;_662_;_script infofile_;_ZIP::ssf8.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("ACCOUNT").Set "10002" @@ hightlight id_;_675_;_script infofile_;_ZIP::ssf9.xml_;_
'TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("PRINTER").SetCursorPos @@ hightlight id_;_692_;_script infofile_;_ZIP::ssf10.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").SendKey TE_ENTER @@ hightlight id_;_9864_;_script infofile_;_ZIP::ssf11.xml_;_
'TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").Sync
'TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").TeField("DATE ISSUED").Set "11" @@ hightlight id_;_922_;_script infofile_;_ZIP::ssf12.xml_;_
curDate = TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").TeField("DATE ISSUED").GetROProperty("text")
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").TeField("DATE ISSUED").Set curDate + 1

'TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").TeField("DATE ISSUED_2").SetCursorPos @@ hightlight id_;_925_;_script infofile_;_ZIP::ssf13.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").SendKey TE_ENTER @@ hightlight id_;_13614_;_script infofile_;_ZIP::ssf14.xml_;_
'TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").Sync
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("REQUESTED(protected)").Check CheckPoint("REQUESTED(protected)") @@ hightlight id_;_1842_;_script infofile_;_ZIP::ssf15.xml_;_

TeWindow("TeWindow").InsightObject("InsightObject").Click @@ hightlight id_;_6_;_script infofile_;_ZIP::ssf16.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_2").Click @@ hightlight id_;_11_;_script infofile_;_ZIP::ssf17.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_3").Click @@ hightlight id_;_15_;_script infofile_;_ZIP::ssf18.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_4").Click @@ hightlight id_;_22_;_script infofile_;_ZIP::ssf19.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_5").Click @@ hightlight id_;_27_;_script infofile_;_ZIP::ssf20.xml_;_
Window("RPA").InsightObject("InsightObject").Click @@ hightlight id_;_37_;_script infofile_;_ZIP::ssf21.xml_;_


