/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class WindowFrame extends fairygui.GLabel {

		public n0:fairygui.GImage;
		public dragArea:fairygui.GGraph;
		public title:fairygui.GTextField;
		public contentArea:fairygui.GGraph;

		public static URL:string = "ui://s1yj9w6mp7th3f";

		public static createInstance():WindowFrame {
			return <WindowFrame><any>(fairygui.UIPackage.createObject("BlackSkin","WindowFrame"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.dragArea = <fairygui.GGraph><any>(this.getChild("dragArea"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
			this.contentArea = <fairygui.GGraph><any>(this.getChild("contentArea"));
		}
	}
}