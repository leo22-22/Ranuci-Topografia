<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\Contact;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //$mymail = 'rannucci@uol.com.br';

        $rules = array(
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'message' => 'required|string',
        );    
        
        $messages = array(
            'name.required' => 'Nome é um campo obrigatório!',
            'email.required' => 'Email é um campo obrigatório!',
            'phone.required' => 'Telefone é um campo obrigatório!',
            'message.required' => 'Mensagem é um campo obrigatório!',
        );

    
        $validator = Validator::make($request->all(), $rules, $messages);
    
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first()
            ], 422);
        }

        $email = $request->email;
        $limit = 3;
        $timeWindow = Carbon::now()->subHours(23);

        $recentSubmissions = Contact::where('email', $email)
            ->where('created_at', '>=', $timeWindow)
            ->count();

        if ($recentSubmissions >= $limit) {
        return response()->json([
        'message' => 'Você atingiu o limite de envio de 3 emails no dia. Tente novamente mais tarde.'
        ], 429);}

        $mailData = [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
        ];

        $contact = new Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->message = $request->message;
        $contact->save();
         
        // Mail::to($mymail)->send(new NewContactMail($mailData));
        Mail::to($mailData['email'])->send(new ContactMail($mailData));
        return response()->json([
            'message' => 'Formulário enviado com sucesso!'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
