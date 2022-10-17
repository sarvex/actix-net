(function() {var implementors = {
"actix_service":[],
"actix_tracing":[["impl&lt;S, Req, U, F&gt; Transform&lt;S, Req&gt; for <a class=\"struct\" href=\"actix_tracing/struct.TracingTransform.html\" title=\"struct actix_tracing::TracingTransform\">TracingTransform</a>&lt;S, U, F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Req&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: ServiceFactory&lt;Req, Response = S::Response, Error = S::Error, Service = S&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;</a>Req) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tracing/0.1.37/tracing/span/struct.Span.html\" title=\"struct tracing::span::Span\">Span</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()