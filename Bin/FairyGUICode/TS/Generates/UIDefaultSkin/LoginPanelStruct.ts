/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HelpButton from "../../Extends/UIDefaultSkin/HelpButton.ts";
import RedButton from "../../Extends/UIDefaultSkin/RedButton.ts";
import TextInput from "../../Extends/UIDefaultSkin/TextInput.ts";
import TextInput from "../../Extends/UIDefaultSkin/TextInput.ts";
import Checkbox from "../../Extends/BlackSkin/Checkbox.ts";
import RightArrow from "../../Extends/UIDefaultSkin/RightArrow.ts";

export default class LoginPanelStruct extends fairygui.GComponent
{
	public m_windowBg : fairygui.GImage;
	public m_formBg : fairygui.GImage;
	public m_usernameKey : fairygui.GTextField;
	public m_usernameGroup : fairygui.GGroup;
	public m_passwordKey : fairygui.GTextField;
	public m_passwordGroup : fairygui.GGroup;
	public m_helpButton : HelpButton;
	public m_enterButton : RedButton;
	public m_usernameInput : TextInput;
	public m_passwordInput : TextInput;
	public m_checkbox : fgui.BlackSkin.Checkbox;
	public m_rightArrow : RightArrow;

	
	public static URL:string = "ui://snq31xvrraoc0";
	
	public static DependPackages:string[] = ["UIDefaultSkin","BlackSkin"];

	
	public static createInstance():LoginPanel {
		return <LoginPanel><any>(fairygui.UIPackage.createObject("UIDefaultSkin","LoginPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_windowBg = <fairygui.GImage><any>(this.getChild("windowBg"));
		this.m_formBg = <fairygui.GImage><any>(this.getChild("formBg"));
		this.m_usernameKey = <fairygui.GTextField><any>(this.getChild("usernameKey"));
		this.m_usernameGroup = <fairygui.GGroup><any>(this.getChild("usernameGroup"));
		this.m_passwordKey = <fairygui.GTextField><any>(this.getChild("passwordKey"));
		this.m_passwordGroup = <fairygui.GGroup><any>(this.getChild("passwordGroup"));
		this.m_helpButton = <HelpButton><any>(this.getChild("helpButton"));
		this.m_enterButton = <RedButton><any>(this.getChild("enterButton"));
		this.m_usernameInput = <TextInput><any>(this.getChild("usernameInput"));
		this.m_passwordInput = <TextInput><any>(this.getChild("passwordInput"));
		this.m_checkbox = <fgui.BlackSkin.Checkbox><any>(this.getChild("checkbox"));
		this.m_rightArrow = <RightArrow><any>(this.getChild("rightArrow"));
		
		
	}
}