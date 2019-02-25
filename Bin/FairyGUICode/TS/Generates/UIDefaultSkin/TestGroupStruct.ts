/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class TestGroupStruct extends fairygui.GComponent
{
	public m_zuwai_start : fairygui.GTextField;
	public m_zuwai_center : fairygui.GTextField;
	public m_adGroup : fairygui.GGroup;
	public m_zuwai_end : fairygui.GTextField;
	public m_loader : fairygui.GLoader;

	
	public static URL:string = "ui://snq31xvroett4d";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():TestGroup {
		return <TestGroup><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestGroup"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_zuwai_start = <fairygui.GTextField><any>(this.getChild("zuwai_start"));
		this.m_zuwai_center = <fairygui.GTextField><any>(this.getChild("zuwai_center"));
		this.m_adGroup = <fairygui.GGroup><any>(this.getChild("adGroup"));
		this.m_zuwai_end = <fairygui.GTextField><any>(this.getChild("zuwai_end"));
		this.m_loader = <fairygui.GLoader><any>(this.getChild("loader"));
		
		
	}
}