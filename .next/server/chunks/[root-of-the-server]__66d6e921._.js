module.exports = {

"[project]/.next-internal/server/app/api/verify-code/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/verify-code/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbcon$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dbcon.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$model$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/model/user.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbcon$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    try {
        // const { username, code } = await request.json()
        const { code } = await request.json();
        // const decodedUsername = decodeURIComponent('username')
        // const user = await UserModel.findOne({ username: decodedUsername })
        // console.log("Searching for user:", decodedUsername);
        const searchParams = request.nextUrl.searchParams;
        const name = searchParams.get('username');
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$model$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            username: name
        });
        console.log("Searching for user:", name);
        console.log("backent otp", typeof user.verifyCode);
        console.log("otp", typeof code);
        if (!user) {
            return Response.json({
                success: false,
                message: "User not found"
            }, {
                status: 500
            });
        }
        const isCodeVarified = user.verifyCode == code;
        // const isCodeNotExpiry = new Date(user.verifyCodeExpiry) > new Date()
        const isCodeNotExpiry = 13 > 12;
        if (isCodeVarified && isCodeNotExpiry) {
            user.isVerified = true;
            await user.save();
            return Response.json({
                success: true,
                message: "Account Verified Successfully"
            }, {
                status: 200
            });
        } else if (!isCodeNotExpiry) {
            return Response.json({
                success: false,
                message: "Verification Code Has Expired, Please Singup Again To Get a New Code"
            }, {
                status: 400
            });
        } else {
            return Response.json({
                success: false,
                message: "Incorrect Vrification Code"
            }, {
                status: 400
            });
        }
    } catch (error) {
        console.log("Error veriflying user", error);
        return Response.json({
            success: false,
            message: "Error veriflying user"
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__66d6e921._.js.map