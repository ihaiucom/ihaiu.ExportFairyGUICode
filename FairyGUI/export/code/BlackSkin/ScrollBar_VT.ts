/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class ScrollBar_VT extends fairygui.GScrollBar {

		public n0:fairygui.GImage;
		public arrow1:ScrollUpButton;
		public arrow2:ScrollDownButton;
		public bar:fairygui.GGraph;
		public grip:GripButton_VT;

		public static URL:string = "ui://s1yj9w6mp7th2w";

		public static createInstance():ScrollBar_VT {
			return <ScrollBar_VT><any>(fairygui.UIPackage.createObject("BlackSkin","ScrollBar_VT"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.arrow1 = <ScrollUpButton><any>(this.getChild("arrow1"));
			this.arrow2 = <ScrollDownButton><any>(this.getChild("arrow2"));
			this.bar = <fairygui.GGraph><any>(this.getChild("bar"));
			this.grip = <GripButton_VT><any>(this.getChild("grip"));
		}
	}
}