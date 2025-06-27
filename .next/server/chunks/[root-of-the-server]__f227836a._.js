module.exports = {

"[project]/.next-internal/server/app/api/sign-up/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/mongoose [external] (mongoose, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}}),
"[project]/src/lib/dbcon.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const connection = {};
async function dbConnect() {
    if (connection.isConnected) {
        console.log("Already connected to databass");
        return;
    }
    try {
        const db = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(process.env.mongoDB_URI || '', {});
        // const db = await mongoose.connect("mongodb://localhost:27017/emailotpapp" || '', {})
        connection.isConnected = db.connections[0].readyState;
        console.log('db connected succefull ');
    } catch (error) {
        console.log("databass connetion falid", error);
        process.exit(1);
    }
}
const __TURBOPACK__default__export__ = dbConnect;
}}),
"[project]/src/model/user.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const MessageSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    content: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    username: {
        type: String,
        required: [
            true,
            "Username is required"
        ],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [
            true,
            "email is required"
        ],
        unique: true,
        match: [
            /.+\@.+\..+/,
            "plase use a valid email address"
        ]
    },
    password: {
        type: String,
        required: [
            true,
            "password is required"
        ]
    },
    verifyCode: {
        type: String,
        required: [
            true,
            "verify code is required"
        ]
    },
    verifyCodeExpiry: {
        type: Date
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    message: [
        MessageSchema
    ]
});
const UserModel = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("User", UserSchema);
const __TURBOPACK__default__export__ = UserModel;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[project]/src/app/api/sign-up/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbcon$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dbcon.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$model$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/model/user.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbcon$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    try {
        const { username, email, password } = await request.json();
        const existingUserVerifiedByusername = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$model$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            username,
            isVerified: true
        });
        if (existingUserVerifiedByusername) {
            return Response.json({
                success: false,
                message: "Username is Already Token"
            }, {
                status: 400
            });
        }
        const existingUserByemail = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$model$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            email
        });
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
        if (existingUserByemail) {
            if (existingUserByemail.isVerified) {
                return Response.json({
                    success: false,
                    message: "User already exit with this email"
                }, {
                    status: 400
                });
            } else {
                const hasedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
                existingUserByemail.password = hasedPassword;
                existingUserByemail.verifyCode = verifyCode;
                existingUserByemail.verifyCodeExpiry = new Date(Date.now() + 3600000);
                await existingUserByemail.save();
            }
        } else {
            const hasedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours() + 1);
            const newUser = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$model$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
                username,
                email,
                password: hasedPassword,
                verifyCode,
                vrifycodeExpiry: expiryDate,
                isVerified: false,
                isAcceptingMessage: true,
                message: []
            });
            await newUser.save();
        }
        //send  verification email
        const eamilResponse = await sendVarificationEmail(email, username, verifyCode);
        if (!eamilResponse.success) {
            return Response.json({
                success: false,
                message: eamilResponse.message
            }, {
                status: 500
            });
        }
        return Response.json({
            success: true,
            message: "User Registered successfully.Please varify your email "
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Error registering user ", error);
        return Response.json({
            success: false,
            message: "Error registering user"
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f227836a._.js.map