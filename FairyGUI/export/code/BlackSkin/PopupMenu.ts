/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class PopupMenu extends fairygui.GComponent {

		public n0:fairygui.GImage;
		public list:fairygui.GList;

		public static URL:string = "ui://s1yj9w6mp7th2t";

		public static createInstance():PopupMenu {
			return <PopupMenu><any>(fairygui.UIPackage.createObject("BlackSkin","PopupMenu"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.list = <fairygui.GList><any>(this.getChild("list"));
		}
	}
}