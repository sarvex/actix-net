(function() {var implementors = {
"actix_service":[],
"actix_tls":[["impl&lt;IO: ActixStream&gt; Service&lt;IO&gt; for <a class=\"struct\" href=\"actix_tls/accept/openssl/struct.AcceptorService.html\" title=\"struct actix_tls::accept::openssl::AcceptorService\">AcceptorService</a>"],["impl&lt;R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.ConnectInfo.html\" title=\"struct actix_tls::connect::ConnectInfo\">ConnectInfo</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/tcp/struct.TcpConnectorService.html\" title=\"struct actix_tls::connect::tcp::TcpConnectorService\">TcpConnectorService</a>"],["impl&lt;IO: ActixStream + 'static&gt; Service&lt;IO&gt; for <a class=\"struct\" href=\"actix_tls/accept/native_tls/struct.AcceptorService.html\" title=\"struct actix_tls::accept::native_tls::AcceptorService\">AcceptorService</a>"],["impl&lt;R, IO&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;R, IO&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/rustls/struct.TlsConnectorService.html\" title=\"struct actix_tls::connect::rustls::TlsConnectorService\">TlsConnectorService</a><span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>,\n    IO: ActixStream,</span>"],["impl&lt;R, IO&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;R, IO&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/openssl/struct.TlsConnectorService.html\" title=\"struct actix_tls::connect::openssl::TlsConnectorService\">TlsConnectorService</a><span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>,\n    IO: ActixStream,</span>"],["impl&lt;R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.ConnectInfo.html\" title=\"struct actix_tls::connect::ConnectInfo\">ConnectInfo</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/struct.ResolverService.html\" title=\"struct actix_tls::connect::ResolverService\">ResolverService</a>"],["impl&lt;R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.ConnectInfo.html\" title=\"struct actix_tls::connect::ConnectInfo\">ConnectInfo</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/struct.ConnectorService.html\" title=\"struct actix_tls::connect::ConnectorService\">ConnectorService</a>"],["impl&lt;R, IO&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;R, IO&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/native_tls/struct.TlsConnector.html\" title=\"struct actix_tls::connect::native_tls::TlsConnector\">TlsConnector</a><span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>,\n    IO: ActixStream + 'static,</span>"],["impl&lt;IO: ActixStream&gt; Service&lt;IO&gt; for <a class=\"struct\" href=\"actix_tls/accept/rustls/struct.AcceptorService.html\" title=\"struct actix_tls::accept::rustls::AcceptorService\">AcceptorService</a>"]],
"actix_tracing":[["impl&lt;S, Req, F&gt; Service&lt;Req&gt; for <a class=\"struct\" href=\"actix_tracing/struct.TracingService.html\" title=\"struct actix_tracing::TracingService\">TracingService</a>&lt;S, F&gt;<span class=\"where fmt-newline\">where\n    S: Service&lt;Req&gt;,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Req</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tracing/0.1.37/tracing/span/struct.Span.html\" title=\"struct tracing::span::Span\">Span</a>&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()