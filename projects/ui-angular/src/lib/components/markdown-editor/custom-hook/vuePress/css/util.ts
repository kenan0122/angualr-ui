export const vuePressBase = `
.kingfar-docs{
    font-size:16px;
    line-height:1.875rem;
}
.kingfar-docs * {
	font-family: -apple-system, PingFang SC, Segoe UI, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, Apple Color Emoji, Segoe UI Emoji, sans-serif;
}
.kingfar-docs a,
.kingfar-docs area,
.kingfar-docs button,
.kingfar-docs [role='button'],
.kingfar-docs input,
.kingfar-docs label,
.kingfar-docs select,
.kingfar-docs summary,
.kingfar-docs textarea {
	touch-action: manipulation;
}
.kingfar-docs ol,
.kingfar-docs ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.kingfar-docs img,
.kingfar-docs svg,
.kingfar-docs video,
.kingfar-docs canvas,
.kingfar-docs audio,
.kingfar-docs iframe,
.kingfar-docs embed,
.kingfar-docs object {
  display: block;
}

.kingfar-docs img,
.kingfar-docs video {
  max-width: 100%;
  height: auto;
}
.kingfar-docs img{
    margin:16px auto;
}
.kingfar-docs input:focus,
.kingfar-docs textarea:focus,
.kingfar-docs select:focus {
  outline: none;
}
.kingfar-docs input {
    background-color: transparent;
  }
  .kingfar-docs h1,
.kingfar-docs h2,
.kingfar-docs h3,
.kingfar-docs h4,
.kingfar-docs h5,
.kingfar-docs h6 {
  position: relative;
  font-weight: 600;
  outline: none;
  margin:auto 0 0 0;
  color:#007bff;
  font-semibold 
}
.kingfar-docs h1,
.kingfar-docs h2 {
	font-size: 1.875rem;
    line-height: 2.25rem;
    margin-top: 1.5rem;
    padding-bottom: 0.75rem;
}
.kingfar-docs h3 {
	font-size: 1.5rem;
    line-height: 2rem
}
.kingfar-docs h4 {
	font-size: 1.25rem;
    line-height: 1.75rem
}
.kingfar-docs h5 {
	font-weight: 600;
    color:#202020;
}
.kingfar-docs h6{
    color:#202020;
}
.kingfar-docs p,
.kingfar-docs summary {
	margin:16px 0 !important;
}
.kingfar-docs p {
    line-height: 1.875rem;
}
.kingfar-docs blockquote {
    border-left: 2px solid rgba(60, 60, 60, 0.29);
	padding-left: 16px;
	transition: border-color 0.5s;
    margin:16px 0;
    color: #6d6e6f;
    padding: 10px 15px;
    border-left: 10px solid #D6DBDF;
    background: rgba(102, 128, 153, 0.05);
}
.kingfar-docs blockquote > p {
	margin:0;
    font-size: 1rem;
    line-height: 1.5rem;
}
.kingfar-docs ul,
.kingfar-docs ol {
    margin:16px 0;
    padding:0 0 0 1.25rem;
}
.kingfar-docs ul {
    list-style-type: disc;
}
.kingfar-docs ol {
	list-style-type: decimal;
}
.kingfar-docs ul ul {
    list-style-type: circle; 
}
.kingfar-docs li + li {
    margin-top: 0.5rem
}
.kingfar-docs li > ol,
.kingfar-docs li > ul {
    margin:0.5rem 0 0 0;
}
.kingfar-docs table {
    display:block;
    border-collapse: collapse;
    margin:1.25rem 0;
    margin-top: 1.25rem/* 20px */;
    margin-bottom: 1.25rem
}
.kingfar-docs tr {
	border-top-width: 1px;
    border-color:#d9d9d9;
}
.kingfar-docs tr:nth-child(2n) {
	background:#00000014;
}
.kingfar-docs th,
.kingfar-docs td {
    border-width: 1px;
    border-color:#d9d9d9;
}

.kingfar-docs hr {
    margin:16px 0;
    border-top:1px;
    border-color:#d9d9d9;
}

.kingfar-docs :not(pre) > code {
    border-radius: 0.25rem;
    padding:0.25rem 0.5rem;
    background:#00000014;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color:#202020 !important;
}
.kingfar-docs .dark :not(pre) > code{
    color:#e4e4e4 !important;
}

.kingfar-docs em{
    color:#f97316;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem 0;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 0.125rem;
    background:#00000014;
}
.kingfar-docs a{
    color:#007bff;
}

.kingfar-docs a:hover {
    text-decoration: underline;
}
.kingfar-docs a:hover > code {
    color:#f97316;
}
.kingfar-docs .dark :not(pre) > code{
    color:#e4e4e4
}
.kingfar-docs .dark tr,.kingfar-docs .dark th,
.kingfar-docs .dark td,.kingfar-docs .dark hr{
    border-color:#505050;
}
.editor-style-content ul{
padding:0;
}
`;
