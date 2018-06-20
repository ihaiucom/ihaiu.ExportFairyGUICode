/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class WindowFrame extends fairygui.GLabel {

		public hasClose:fairygui.Controller;
		public n0:fairygui.GImage;
		public n1:fairygui.GImage;
		public contentArea:fairygui.GGraph;
		public dragArea:fairygui.GGraph;
		public n5:WindowCloseButton;
		public title:fairygui.GTextField;

		public static URL:string = "ui://stv9j6m6raoc1j";

		public static createInstance():WindowFrame {
			return <WindowFrame><any>(fairygui.UIPackage.createObject("BlueSkin","WindowFrame"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.hasClose = this.getController("hasClose");
			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.contentArea = <fairygui.GGraph><any>(this.getChild("contentArea"));
			this.dragArea = <fairygui.GGraph><any>(this.getChild("dragArea"));
			this.n5 = <WindowCloseButton><any>(this.getChild("n5"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}