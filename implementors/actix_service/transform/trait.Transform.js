(function() {var implementors = {};
implementors["actix_service"] = [];
implementors["actix_tracing"] = [{"text":"impl&lt;S, Req, U, F&gt; <a class=\"trait\" href=\"actix_service/transform/trait.Transform.html\" title=\"trait actix_service::transform::Transform\">Transform</a>&lt;S, Req&gt; for <a class=\"struct\" href=\"actix_tracing/struct.TracingTransform.html\" title=\"struct actix_tracing::TracingTransform\">TracingTransform</a>&lt;S, U, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;Req&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"actix_service/trait.ServiceFactory.html\" title=\"trait actix_service::ServiceFactory\">ServiceFactory</a>&lt;Req, Response = S::<a class=\"associatedtype\" href=\"actix_service/trait.Service.html#associatedtype.Response\" title=\"type actix_service::Service::Response\">Response</a>, Error = S::<a class=\"associatedtype\" href=\"actix_service/trait.Service.html#associatedtype.Error\" title=\"type actix_service::Service::Error\">Error</a>, Service = S&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;</a>Req) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tracing/0.1.35/tracing/span/struct.Span.html\" title=\"struct tracing::span::Span\">Span</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["actix_tracing::TracingTransform"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()