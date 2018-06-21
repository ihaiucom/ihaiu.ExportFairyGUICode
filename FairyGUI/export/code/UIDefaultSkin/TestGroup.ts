/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class TestGroup extends fairygui.GComponent {

		public zuwai_start:fairygui.GTextField;
		public n0:fairygui.GGraph;
		public n1:fairygui.GGraph;
		public n3:fairygui.GGraph;
		public n4:fairygui.GGraph;
		public zuwai_center:fairygui.GTextField;
		public adGroup:fairygui.GGroup;
		public zuwai_end:fairygui.GTextField;
		public loader:fairygui.GLoader;

		public static URL:string = "ui://snq31xvroett4d";

		public static createInstance():TestGroup {
			return <TestGroup><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestGroup"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.zuwai_start = <fairygui.GTextField><any>(this.getChild("zuwai_start"));
			this.n0 = <fairygui.GGraph><any>(this.getChild("n0"));
			this.n1 = <fairygui.GGraph><any>(this.getChild("n1"));
			this.n3 = <fairygui.GGraph><any>(this.getChild("n3"));
			this.n4 = <fairygui.GGraph><any>(this.getChild("n4"));
			this.zuwai_center = <fairygui.GTextField><any>(this.getChild("zuwai_center"));
			this.adGroup = <fairygui.GGroup><any>(this.getChild("adGroup"));
			this.zuwai_end = <fairygui.GTextField><any>(this.getChild("zuwai_end"));
			this.loader = <fairygui.GLoader><any>(this.getChild("loader"));
		}
	}
}