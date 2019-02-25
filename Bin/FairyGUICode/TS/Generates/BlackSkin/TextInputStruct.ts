/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class TextInputStruct extends fairygui.GLabel
{
	public m_grayed : fairygui.Controller;
	public m_title : fairygui.GTextInput;

	
	public static URL:string = "ui://s1yj9w6mp7th2k";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():TextInput {
		return <TextInput><any>(fairygui.UIPackage.createObject("BlackSkin","TextInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_grayed = this.getController("grayed");

		
		this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
		
		
	}
}