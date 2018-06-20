/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class NumericInput extends fairygui.GLabel {

		public c1:fairygui.Controller;
		public grayed:fairygui.Controller;
		public n0:fairygui.GImage;
		public n4:fairygui.GImage;
		public holder:fairygui.GGraph;
		public title:fairygui.GTextInput;

		public static URL:string = "ui://s1yj9w6mp7th2l";

		public static createInstance():NumericInput {
			return <NumericInput><any>(fairygui.UIPackage.createObject("BlackSkin","NumericInput"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.c1 = this.getController("c1");
			this.grayed = this.getController("grayed");
			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.n4 = <fairygui.GImage><any>(this.getChild("n4"));
			this.holder = <fairygui.GGraph><any>(this.getChild("holder"));
			this.title = <fairygui.GTextInput><any>(this.getChild("title"));
		}
	}
}